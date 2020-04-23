import { Component, OnInit } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { CestaService } from './service/cesta.service';

@Component({
  selector: 'pdv-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  public cesta: any;

  constructor(private CestaService: CestaService, private storageFacade: StorageFacade) {}

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
  }

  public deletaItem(item: any): void{
    let str = localStorage.getItem("ls.Cesta")
    let array = JSON.parse(str)
    array.splice(item,1)
    localStorage.setItem("ls.Cesta",JSON.stringify(array))
    this.cesta = this.storageFacade.cesta
  }

  diminuiQuantidade(item: any){
    if(this.cesta[item].quantidade>1 && this.cesta[item].quantidade <=99){
      this.cesta[item].quantidade--
      this.CestaService.diminuiQuantidade(item)
    }
  }

  aumentaQuantidade(item: any){
    if(this.cesta[item].quantidade>0 && this.cesta[item].quantidade <99){
      this.cesta[item].quantidade++
      this.CestaService.aumentaQuantidade(item)
    }  
  }

}
