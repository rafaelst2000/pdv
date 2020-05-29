import { Injectable, EventEmitter  } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';

import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class BuscaRestService{
  url = 'https://14bc651f-3b31-459a-b851-8c3204d15731.mock.pstmn.io/itens';

  constructor(private http: HttpClient) { }

  buscar(itemBuscado): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }


}
