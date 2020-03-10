import { CoreModule } from './../core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { BuscaMedicoComponent } from './busca-medico/busca-medico.component'
import { MedicoForm } from './busca-medico/forms/medico.form';
import { MedicoRestService } from './services/medico-rest.service';
import { MedicoService } from './services/medico.service';
@NgModule({
    declarations: [
        BuscaMedicoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        CoreModule
    ],
    exports: [
        BuscaMedicoComponent
    ],
    entryComponents: [
        BuscaMedicoComponent
    ],
    providers: [
        MedicoForm,
        MedicoService,
        MedicoRestService
    ],
})
export class MedicoModule {}