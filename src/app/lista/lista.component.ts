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

  constructor(private listaService: ListaService, private storageFacade: StorageFacade) { 

  }

  ngOnInit() {
    this.lista = this.storageFacade.lista;
  }


  /*public adicionaItemCesta(item: any): void{
  if(!this.listaService.itemExists(item)){
      let str2 = localStorage.getItem("ls.Cesta")
      let cestaArray = JSON.parse(str2)   
      cestaArray = cestaArray.concat(item)
      cestaArray = cestaArray.reverse()
      localStorage.setItem("ls.Cesta",JSON.stringify(cestaArray))
     //arrumar toda a função
  }
}
*/
}



