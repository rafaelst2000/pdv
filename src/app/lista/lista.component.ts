import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../core/cesta-storage/model/item';

import { StorageFacade } from '../core/persistence/storage.facade';
import { ListaService } from './service/lista.service';
import { BuscaIntegrationService } from './service/busca-integration.service';

@Component({
  selector: 'pdv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista = [];

  constructor(private buscaIntegration: BuscaIntegrationService, private listaService: ListaService ) {
    this.buscaIntegration.getItens().subscribe(res => {
      this.lista = res.map(item => item);
    });

  }
  ngOnInit() {

  }

}
