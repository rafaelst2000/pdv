import { Injectable, EventEmitter  } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';



@Injectable()
export class BuscaIntegrationService{
    public buscaItemPorDescricao$: EventEmitter<string> = new EventEmitter<string>();

    public buscarItemPorDescricao(item): void{
        this.buscaItemPorDescricao$.emit(item)
    }
}