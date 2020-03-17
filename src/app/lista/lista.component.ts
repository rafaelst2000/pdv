import { Component, OnInit } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { ListaService } from './service/lista.service';

@Component({
  selector: 'pdv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public lista: any;

  constructor(private CestaService: ListaService, private storageFacade: StorageFacade) { 

  }

  ngOnInit() {
    this.lista = this.storageFacade.lista;
  }
}
