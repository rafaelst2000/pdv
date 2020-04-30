import { Injectable } from '@angular/core';
import { Input } from '@angular/core';

import { StorageFacade } from '../../core/persistence/storage.facade';
import { Item } from '../../core/cesta-storage/model/item';


@Injectable()
export class FooterService {
    
    constructor( private storageFacade: StorageFacade ){ }
    
}      