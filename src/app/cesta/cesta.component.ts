import { Component, OnInit, Input } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { CestaService } from './service/cesta.service';

@Component({
  selector: 'pdv-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  public cesta
  valorTotal
  descontoTotal

  constructor(private cestaService: CestaService, private storageFacade: StorageFacade) {}

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
    this.valorTotal = this.cestaService.totalLiquidoCesta()
    this.descontoTotal = this.cestaService.totalDescontosCesta()
  }

  public atualizaValores(){
    this.setTotalLiquidoCesta()
    this.setTotalDescontosCesta()
  }

  public setTotalLiquidoCesta(){
      this.valorTotal = this.cestaService.totalLiquidoCesta()
  } 

  public setTotalDescontosCesta() {
      this.descontoTotal = this.cestaService.totalDescontosCesta()
  }

  public deletaItem(item: any): void{
    this.cestaService.deletaItemStorage(item)
    this.cesta = this.storageFacade.cesta
    this.atualizaValores() 
  }

  public setQuantidadeInput(item: any, quant: number): void{
    if(quant>0 && quant<=99){
      this.cesta[item].quantidade = quant
      this.cestaService.alteraQuantidadeInputStorage(item, quant)
    }else if(quant>99){
      this.cesta[item].quantidade = 99
    }else{
      this.cesta[item].quantidade = 1
    }
    this.atualizaValores()
  }

  public diminuiQuantidade(item: any){
    if(this.cesta[item].quantidade>1 && this.cesta[item].quantidade <=99){
      this.cesta[item].quantidade--
      this.cestaService.diminuiQuantidadeStorage(item)
    }
    this.atualizaValores()
  }

  public aumentaQuantidade(item: any){
    if(this.cesta[item].quantidade>0 && this.cesta[item].quantidade <99){
      this.cesta[item].quantidade++
      this.cestaService.aumentaQuantidadeStorage(item)
    }  
    this.atualizaValores()
  }


}
