import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { MedicoRestService } from "./medico-rest.service";
import { ProfissionalSaudeRespnse } from '../integration/profissional-saude.response';
import { MedicoModel } from "../model/medico.model";
import { Builder } from "builder-pattern";
import { SelectOptionModel } from "../../../shared/input/model/select-option.model";
import { StorageFacade } from "../../persistence/storage.facade";

@Injectable()
export class MedicoService {

    constructor(
        private medicoRestService: MedicoRestService,
        private storageFacade: StorageFacade
    ) {
    }

    public getMedico(parametro: MedicoModel) : Observable<MedicoModel>{
        return this.medicoRestService.getMedico(parametro.uf ,parametro.tipo, this.removerZerosEsquerda(parametro.codigoRegistro))
        .switchMap( res => Observable.of(this.mapperMedicoModel(res)))
    }

    private mapperMedicoModel(profissionais: ProfissionalSaudeRespnse[]): MedicoModel{
        return profissionais.map( profissional =>
            Builder<MedicoModel>()
                .codigoEntidadeComercial(profissional.codigoEntidadeComercial)
                .codigoRegistro(profissional.codigoRegistro)
                .nome(profissional.nome)
                .tipo(profissional.tipo)
                .uf(profissional.uf)
            .build()
        )
        .pop()   
    }

	private removerZerosEsquerda(codigoRegistro) {
		return codigoRegistro.toString().replace(/^0+/, '').toString()
	}

    public getUfs(): string[] {
        return ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"];
    }

    public getTipos(): Array<SelectOptionModel> {
        return [
            new SelectOptionModel(1, 'CRM'),
            new SelectOptionModel(2, 'CRO'),
            new SelectOptionModel(3, 'CRMV'),
            new SelectOptionModel(4, 'RMS')
        ]
    }

    public getMedicoReceita(EAN: number): MedicoModel {
        const cesta = this.storageFacade.cesta;
        const item = cesta.find(obj=> obj.produto.ean == EAN);
        if (item.receita == null || item.receita == undefined) return null;
        return Builder<MedicoModel>()
            .codigoRegistro(Number(item.receita.numeroRegistro))
            .tipo(item.receita.tipoProfissional)
            .uf(item.receita.siglaUf)
            .build();
     }
}