import { Injectable, EventEmitter  } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class BuscaIntegrationService{

  constructor(private http: HttpClient) { }

  public getItens(): Observable<any[]> {
    const url = 'https://711fbc89-7d83-44d6-ac1b-30a59fba9e03.mock.pstmn.io/itens';

    return this.http.get<any[]>(url);
  }


}
