import { FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, ViewChild, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import { MedicoForm } from './forms/medico.form';
import { MedicoModel } from '../model/medico.model';

import { HttpErrorResponse } from '@angular/common/http';

import { MedicoService } from '../services/medico.service';

@Component({
    selector: 'app-busca-medico',
    templateUrl: './busca-medico.component.html',
    styleUrls: ['./busca-medico.component.css']
})
export class BuscaMedicoComponent implements OnInit, OnChanges {

    public listaUf: string[];
    public listaTipo: Array<any>;
    public medicoForm: FormGroup;
    private buscaMedico: boolean = false;

    @Input()
    public exibeValidacaoObrigatorio: boolean = false;

    @Input()
    public eanBuscaReceitaNaCesta: number;

    @Input()
    public deveReceberFoco: boolean = true;

    @Input()
    public medicoPreSelecionado: MedicoModel = null;

    @Input()
    public tiposPermitidos: Array<string> = [];

    @Input()
    public classNomeMedico: string = null;

    @Output()
    public medicoSelecionado: EventEmitter<MedicoModel> = new EventEmitter<MedicoModel>();

    @ViewChild('buttonBuscaMedico')
    public buttonBuscaMedico: ElementRef;

    constructor(
        private medicoFormFactory: MedicoForm,
        private medicoService: MedicoService,
        public notification: any) { }

    ngOnInit(): void {
        this.medicoForm = this.medicoFormFactory.createForm();
        this.medicoForm.controls['uf'].setValue('RS');
        this.medicoForm.controls['tipo'].setValue(1);
        this.listaUf = this.medicoService.getUfs();
        this.carregarTipos();
        this.carregarMedicoPreSelecionado();
        this.buscaMedicoPreSelecionado();
        if (this.buscaMedico && this.deveReceberFoco) document.getElementById('codigoRegistro').focus();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.eanBuscaReceitaNaCesta) {
            this.carregarMedicoPreSelecionado();
            this.buscaMedicoPreSelecionado();
        }
    }

    private carregarTipos(): void {
        if (this.tiposPermitidos.length == 0) {
            this.listaTipo = this.medicoService.getTipos();
        } else {
            this.listaTipo = this.medicoService.getTipos()
                .filter(item => this.tiposPermitidos.some(tipo => tipo == item.descricao));
        }
    }

    public buscaMedicoPreSelecionado(): void {
        if (!this.buscaMedico) {
            if (!(this.medicoPreSelecionado == null || this.medicoPreSelecionado == undefined)) {
                of({}).switchMap(() => this.buscarMedicoPreSeleciomado())
                    .subscribe(res => {
                        const codigoRegistro = (res && res.codigoRegistro) ? res.codigoRegistro : '';
                        this.medicoForm.controls['codigoRegistro'].setValue(codigoRegistro);
                        this.carregarMedico(res);
                    });
            }
        }
    }
    public buscarMedico(): void{
        if (!this.buscaMedico){
            this.medicoService.getMedico(this.getParametroBuscaMedico())
                .subscribe( res => {
                    this.buscaMedico = true;
                    this.carregarMedico(res);
                },
                (error: HttpErrorResponse) => this.tratarErro(error));
        }
    }

    private carregarMedicoPreSelecionado(): void {
        if (this.eanBuscaReceitaNaCesta) {
            this.medicoPreSelecionado = this.medicoService.getMedicoReceita(this.eanBuscaReceitaNaCesta);
        }
    }

    public buscarMedicoPreSeleciomado(): Observable<MedicoModel> {
        this.buscaMedico = true;
        return this.medicoService.getMedico(this.medicoPreSelecionado);
    }

    private getParametroBuscaMedico(): MedicoModel {
        return <MedicoModel>this.medicoForm.getRawValue();
    }

    public tratarErro(error: HttpErrorResponse): void {
        if (error.status === 404) {
            this.notification.errorMessage('Médico não encontrado.');
            this.medicoForm.controls['nome'].setValue('');
            this.medicoForm.controls['codigoRegistro'].setErrors({ error: true });
            this.buscaMedico = false;
        }
    }

    private carregarMedico(medico: MedicoModel): void {
        medico.tipoDescricao = this.getDescricaoTipo(medico.tipo);
        this.medicoForm.controls['nome'].setValue(medico.nome);
        this.medicoForm.controls['codigoRegistro'].setValue(medico.codigoRegistro);
        this.medicoSelecionado.emit(medico);
        this.buscaMedico = false;
    }

    private getDescricaoTipo(tipo: number): any {
        const tipoOrgao = this.medicoService.getTipos().find(item => item.codigo == tipo);
        return tipoOrgao ? tipoOrgao.descricao : null;
    }

    public formMarkAsDirty(): void {
        for (const controlName in this.medicoForm.controls) {
            if (this.medicoForm.controls.hasOwnProperty(controlName)) {
                this.medicoForm.controls[controlName].markAsDirty();
            }
        }
    }

    public desabilitar(): void {
        this.buttonBuscaMedico.nativeElement.disabled = 'disabled';
        for (const key in this.medicoForm.controls) {
            if (this.medicoForm.controls.hasOwnProperty(key)) {
                this.medicoForm.controls[key].disable();
            }
        }
    }

    public habilitar(): void {
        this.buttonBuscaMedico.nativeElement.disabled = null;
        if (!this.medicoForm) return;
        for (const key in this.medicoForm.controls) {
            if (this.medicoForm.controls.hasOwnProperty(key)) {
                this.medicoForm.controls[key].enable();
            }
        }
    }

    public getClassNomeMedico(): string {
        return this.classNomeMedico ? this.classNomeMedico : 'col-md-12';
    }

    public validaMedicoPreSelecionado(): void {
        const validators: ValidatorFn[] = [];
        this.medicoForm.controls['codigoRegistro'].setValidators(validators.concat([Validators.required]));
        this.medicoForm.controls['codigoRegistro'].updateValueAndValidity();
        this.medicoForm.controls['codigoRegistro'].markAsDirty();
    }


    public isRequired(form: FormGroup, campo: string): boolean {
        if (this.exibeValidacaoObrigatorio) {
            const validator = form.get(campo).validator && form.get(campo).validator({} as AbstractControl);
            if (validator && validator.required) return true;
        }
        return false;
    }

    public isRequiredLabel(form: FormGroup, campo: string): string {
        return this.isRequired(form, campo) ? '*' : '';
    }

    public getBuscaMedico(): boolean {
        return this.buscaMedico;
    }

}
