import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { Item } from '../../core/cesta-storage/model/item';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class BuscaRestService{
  url = 'https://1e35c7bb-db17-46ff-8d40-d1063798d720.mock.pstmn.io/itens';

  constructor(private http: HttpClient) { }

  buscar(itemBuscado): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }


}
