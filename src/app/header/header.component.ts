import { Component, OnInit } from '@angular/core';

import { BuscaIntegrationService } from '../lista/service/busca-integration.service';

@Component({
  selector: 'pdv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  itemDigitado: string
  itens: any;

  constructor(private buscaIntegrationService: BuscaIntegrationService) {}

  ngOnInit() {
  }

  public buscar(descricao: string): void{
    this.buscaIntegrationService.buscarItemPorDescricao(descricao)
  }


}
