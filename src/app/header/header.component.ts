import { Component, OnInit, Input } from '@angular/core';
import { BuscaIntegrationService } from '../lista/service/busca-integration.service';

@Component({
  selector: 'pdv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: any;

  constructor(private buscaIntegration: BuscaIntegrationService) { }

  ngOnInit() {
  }
  teste(item){
    this.buscaIntegration.buscarItemPorDescricao(item)
    //console.log(item)
  }

}
