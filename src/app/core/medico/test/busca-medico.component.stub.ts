import { Builder } from 'builder-pattern';
import { MedicoModel } from '../model/medico.model';
import { Observable } from 'rxjs';
import { SelectOptionModel } from '../../../shared/input/model/select-option.model';
import { HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
export class BuscaMedicoComponentStub {

    public static mockRetornoGetMedico(): MedicoModel {
        return Builder<MedicoModel>()
            .codigoEntidadeComercial(1)
            .codigoRegistro(2)
            .nome('Brunno Sena')
            .tipo(3)
            .uf('RS')
            .build();
    }

    public static mockRetornoGetError(): HttpErrorResponse {
        const erro: HttpErrorResponse = Builder<HttpErrorResponse>().error('').status(404).build();
        return erro;
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

    public static mockMedicoModel(): MedicoModel {
        return Builder<MedicoModel>()
            .build();
    }

    public static mockHttpErrorResponse(): HttpErrorResponse {
        return Builder<HttpErrorResponse>()
            .status(404)
            .build();
    }

    public static mockFormGroupFormMarkAsDirty(): FormGroup {
        return Builder<FormGroup>()
            .controls({
                controlName: Builder<FormGroup>()
                    .value(10)
                    .markAsDirty(() => { })
                    .build(),
            })
            .status('VALID')
            .value({})
            .touched(true)
            .pristine(false)
            .build();
    }

    public static mockFormGroupDesabilitar(): FormGroup {
        return Builder<FormGroup>()
            .controls({
                key: Builder<FormGroup>()
                    .value(10)
                    .disable(() => { })
                    .build(),
            })
            .status('VALID')
            .value({})
            .touched(true)
            .pristine(false)
            .build();
    }

    public static mockFormGroupHabilitar(): FormGroup {
        return Builder<FormGroup>()
            .controls({
                key: Builder<FormGroup>()
                    .value(10)
                    .enable(() => { })
                    .build(),
            })
            .status('VALID')
            .value({})
            .touched(true)
            .pristine(false)
            .build();
    }

    public static mockFormGroupValidaMedicoPreSelecionado(): FormGroup {
        return Builder<FormGroup>()
            .controls({
                codigoRegistro: Builder<FormGroup>()
                    .value(10)
                    .setValidators(() => { })
                    .updateValueAndValidity(() => { })
                    .markAsDirty(() => { })
                    .build(),
            })
            .status('VALID')
            .value({})
            .touched(true)
            .pristine(false)
            .build();
    }

    public getMedico() { }
    public getUfs() { }
    public getTipos() { }
    public atentionMessage() { }
    public errorMessage() { }
    public getMedicoReceita() { }


}