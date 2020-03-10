import { NgModule } from '@angular/core';

import { PersistenceService } from './persistence/persistence.service';
import { StorageFacade } from './persistence/storage.facade';
import { LocationService } from './location/location.service';


@NgModule({
    providers: [
        PersistenceService,
        StorageFacade,
        LocationService,
       
    ],
})
export class CoreModule {
}