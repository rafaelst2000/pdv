import { Component, OnInit, Input } from '@angular/core';

import { ListaService } from './service/lista.service';
import { BuscaIntegrationService } from './service/busca-integration.service';

@Component({
  selector: 'pdv-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista = [];

  constructor(private listaService: ListaService,
              private buscaIntegrationService: BuscaIntegrationService) {}

  ngOnInit() {
    this.buscaIntegrationService.buscaItemPorDescricao$
      .switchMap(descricao => this.listaService.buscarItens(descricao))
      .subscribe(items => this.lista = items);
  }
}