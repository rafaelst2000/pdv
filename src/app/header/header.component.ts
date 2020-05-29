import { Component, OnInit, Input } from '@angular/core';
import { BuscaRestService } from '../lista/service/busca-rest.service';
import { Subject } from 'rxjs/Subject';
import { ListaService } from '../lista/service/lista.service';
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

  public buscar(desc: string): void{
    this.buscaIntegrationService.buscarItemPorDescricao(desc)
  }


}
