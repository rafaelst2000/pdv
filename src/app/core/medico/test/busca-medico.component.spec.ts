import { BuscaMedicoComponentStub as stub } from './busca-medico.component.stub';
import { BuscaMedicoComponent } from '../busca-medico/busca-medico.component';
import { ComponentFixture, TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { NotificationService } from '../../../shared/notification/notification.service';
import { MedicoService } from '../services/medico.service';
import { MedicoModule } from '../medico.module';
import { Observable } from 'rxjs';
import { TestSuite } from '../../../test-utils/test-suite';
import { SimpleChanges, SimpleChange, ElementRef } from '@angular/core';

describe('BuscaMedicoComponent =>', () => {

    let component: BuscaMedicoComponent;
    let medicoService: MedicoService;
    let notificationService: NotificationService;
    let fixture: ComponentFixture<BuscaMedicoComponent>;

    TestSuite.configure();

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                MedicoModule
            ],
            providers: [
                { provide: MedicoService, useClass: stub },
                { provide: NotificationService, useClass: stub },
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(BuscaMedicoComponent);
                medicoService = TestBed.get(MedicoService);
                notificationService = TestBed.get(NotificationService);
                component = fixture.componentInstance;
            });
    }));

    describe('Inicializando testes =>', () => {
        beforeEach(() => {
            spyOn(medicoService, 'getUfs').and.callFake(() => stub.mockRetornoUfs());
            spyOn(medicoService, 'getTipos').and.callFake(() => stub.mockGetTipos());
        });
        it('Deve inicializar o component...', () => {
            expect(component).toBeDefined();
        });
    });

    describe('Dado que tenha sido chamado o [BuscaMedico] =>', () => {

        describe('Em caso de SUCESSO =>', () => {
            beforeEach(() => {
                spyOn(medicoService, 'getUfs').and.callFake(() => stub.mockRetornoUfs());
                spyOn(medicoService, 'getTipos').and.callFake(() => stub.mockGetTipos());

                spyOn(component.medicoForm, 'getRawValue').and.callFake(() => stub.mockRetornoGetMedico());
                spyOn(medicoService, 'getMedico').and.callFake(() => Observable.of(stub.mockRetornoGetMedico()));
                component.buscarMedico();
            });
            it('Se o método getMetodo foi chamado...', () => {
                expect(medicoService.getMedico).toHaveBeenCalled();
            });
            it('A variavel buscaMedico espera que ele seja [false]...', () => {
                expect(component.getBuscaMedico()).toBe(false);
            });
        });

        describe('Em caso de ERRO =>', () => {
            beforeEach(() => {
                spyOn(medicoService, 'getMedico').and.callFake(() => Observable.throw(stub.mockRetornoGetError()));
                spyOn(component, 'tratarErro').and.callFake(() => Observable.throw(stub.mockRetornoGetError()));
                component.buscarMedico();
            });
            it('A variavel buscaMedico deve verficar se retorna 404...', () => {
                expect(medicoService.getMedico).toHaveBeenCalled();
            });
        });
    });

    describe('Dado a chamada no metodo [buscarMedicoPreSeleciomado]', () => {
        beforeEach(() => {
            spyOn(medicoService, 'getMedico').and.returnValue(Observable.of(stub.mockMedicoModel()));
            component.buscarMedicoPreSeleciomado().subscribe(res => res);
        });
        it('Então [buscarMedico] deve ser igual a [true]', () => {
            expect(component.buscarMedico).toBeTruthy();
        });
        it('Então o metodo [getMedico] da [medicoService] deve ser chamado passando como parametro [medicoPreSelecionado]', () => {
            expect(medicoService.getMedico).toHaveBeenCalledWith(component.medicoPreSelecionado);
        });
    });

    describe('Dado a chamada no metodo [tratarErro]', () => {
        beforeEach(() => {
            spyOn(component.notification, 'errorMessage');
            spyOn(component.medicoForm.controls['nome'], 'setValue');
            spyOn(component.medicoForm.controls['codigoRegistro'], 'setErrors');
            component.tratarErro(stub.mockHttpErrorResponse());
        });
        it('Então o metodo [atentionMessage] da [notification] deve ser chamado com ["Médico não econtrado."]', () => {
            expect(component.notification.errorMessage).toHaveBeenCalledWith('Médico não encontrado.');
        });
        it('Então o [setValue] deve ser chamado com uma string vazia', () => {
            expect(component.medicoForm.controls['nome'].setValue).toHaveBeenCalledWith('');
        });
        it('Então o [setErrors] deve ser chamado [{ error: true }]', () => {
            expect(component.medicoForm.controls['codigoRegistro'].setErrors).toHaveBeenCalledWith({ error: true });
        });
        it('Então [buscaMedico] deve ser [false]', () => {
            expect(component['buscaMedico']).toBeFalsy();
        });
    });

    describe('Dado a chamada no metodo [ngOnChanges]', () => {
        beforeEach(() => {
            const changes: SimpleChanges = {};
            changes.eanBuscaReceitaNaCesta = new SimpleChange(null, null, true);
            spyOn(medicoService, 'getMedicoReceita');
            spyOn(component, 'buscaMedicoPreSelecionado');
            component.eanBuscaReceitaNaCesta = 132;
            component.ngOnChanges(changes);
        });

        describe('Quando o metodo [getMedicoReceita] for chamado', () => {
            it('Então o metodo [getMedicoReceita] da [medicoService] deve ser chamado', () => {
                expect(medicoService.getMedicoReceita).toHaveBeenCalled();
            });
        });
        it('Então o metodo [buscaMedicoPreSelecionado] deve ser chamado', () => {
            expect(component.buscaMedicoPreSelecionado).toHaveBeenCalled();
        });
    });

    describe('Dado a chamada no metodo [formMarkAsDirty]', () => {
        beforeEach(() => {
            component.medicoForm = stub.mockFormGroupFormMarkAsDirty();
            spyOn(component.medicoForm.controls['controlName'], 'markAsDirty');
            component.formMarkAsDirty();
        });
        it('Então o metodo [markAsDirty] deve ser chamado', () => {
            expect(component.medicoForm.controls['controlName'].markAsDirty).toHaveBeenCalled();
        });
    });

    describe('Dado a chamada no metodo [desabilitar]', () => {
        beforeEach(() => {
            component.buttonBuscaMedico = <ElementRef>{ nativeElement: { disabled: () => { } } };
            component.medicoForm = stub.mockFormGroupDesabilitar();
            spyOn(component.medicoForm.controls['key'], 'disable');
            component.desabilitar();
        });
        it('Então [disabled] do [buttonBuscaMedico.nativeElement] deve ser igual a ["disabled"]', () => {
            expect(component.buttonBuscaMedico.nativeElement.disabled).toEqual('disabled');
        });
        it('Então o metodo [disable] deve ser chamado', () => {
            expect(component.medicoForm.controls['key'].disable).toHaveBeenCalled();
        });
    });

    describe('Dado a chamada no metodo [habilitar]', () => {
        beforeEach(() => {
            component.buttonBuscaMedico = <ElementRef>{ nativeElement: { disabled: () => { } } };
            component.medicoForm = stub.mockFormGroupHabilitar();
            spyOn(component.medicoForm.controls['key'], 'enable');
            component.habilitar();
        });
        it('Então [disabled] do [buttonBuscaMedico.nativeElement] deve ser igual a [null]', () => {
            expect(component.buttonBuscaMedico.nativeElement.disabled).toEqual(null);
        });
        it('Então o metodo [enable] deve ser chamado', () => {
            expect(component.medicoForm.controls['key'].enable).toHaveBeenCalled();
        });
    });

    describe('Dado a chamada no metodo [validaMedicoPreSelecionado]', () => {
        beforeEach(() => {
            component.medicoForm = stub.mockFormGroupValidaMedicoPreSelecionado();
            spyOn(component.medicoForm.controls['codigoRegistro'], 'setValidators');
            spyOn(component.medicoForm.controls['codigoRegistro'], 'updateValueAndValidity');
            spyOn(component.medicoForm.controls['codigoRegistro'], 'markAsDirty');
            component.validaMedicoPreSelecionado();
        });
        it('Então o metodo [setValidators] deve ser chamado', () => {
            expect(component.medicoForm.controls['codigoRegistro'].setValidators).toHaveBeenCalled();
        });
        it('Então o metodo [updateValueAndValidity] deve ser chamado', () => {
            expect(component.medicoForm.controls['codigoRegistro'].updateValueAndValidity).toHaveBeenCalled();
        });
        it('Então o metodo [markAsDirty] deve ser chamado', () => {
            expect(component.medicoForm.controls['codigoRegistro'].markAsDirty).toHaveBeenCalled();
        });
    });






});
