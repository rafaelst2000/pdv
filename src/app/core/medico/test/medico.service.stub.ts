import { Builder } from 'builder-pattern';
import { MedicoModel } from '../model/medico.model';
import { HttpErrorResponse } from '@angular/common/http';
import { SelectOptionModel } from '../../../shared/input/model/select-option.model';
import { ProfissionalSaudeRespnse } from '../integration/profissional-saude.response';

export class MedicoServiceStub {


    public getMedico() { }
    public getUfs() { }
    public getTipos() { }
    public getMedicoReceita(){}

    public static mockRetornoGetMedico(): MedicoModel[] {
        return [Builder<MedicoModel>()
            .codigoEntidadeComercial(1)
            .codigoRegistro(2)
            .nome('Brunno Sena')
            .tipo(3)
            .uf('RS')
            .build()];
    }

    public static mockRetornoGetError(): HttpErrorResponse {
        return Builder<HttpErrorResponse>().error('').status(404).build();
    }

    public static mockRetornoUfs(): Array<String> {
        return ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    }


    public static mockGetTipos(): Array<SelectOptionModel> {
        return [
            new SelectOptionModel(1, 'CRM'),
            new SelectOptionModel(2, 'CRO'),
            new SelectOptionModel(3, 'CRMV'),
            new SelectOptionModel(4, 'RMS')
        ];
    }

    public static mockGetMedicoReceita(): MedicoModel {
        return Builder<MedicoModel>()
            .codigoRegistro(1234)
            .tipo(115)
            .uf('RS')
            .build();
    }

}