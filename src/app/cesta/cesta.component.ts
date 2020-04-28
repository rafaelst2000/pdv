import { Component, OnInit, Input } from '@angular/core';

import { StorageFacade } from '../core/persistence/storage.facade';
import { CestaService } from './service/cesta.service';

@Component({
  selector: 'pdv-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {
  public cesta: any;
  valorTotal: number;
  descontoTotal: number;

  constructor(private CestaService: CestaService, private storageFacade: StorageFacade) {}

  ngOnInit() {
    this.cesta = this.storageFacade.cesta;
    this.valorTotal = this.totalLiquidoCesta();
    this.descontoTotal = this.totalDescontosCesta()
  }

  public atualizaValores(){
    this.totalLiquidoCesta()
    this.totalDescontosCesta()
  }

  public totalLiquidoCesta(){
    const itensCesta = this.storageFacade.cesta || [];
    const valor = itensCesta.reduce((acc, cur) => acc += cur.quantidade * cur.produto.precoPor, 0);
    const total =  Math.round(valor * 100) / 100;
    this.valorTotal = total;
    return total
} 

public totalDescontosCesta(): number {
  const itensCesta = this.storageFacade.cesta || [];
  const desc = itensCesta.reduce((acc, cur) => acc += cur.quantidade * (cur.produto.precoDe - cur.produto.precoPor), 0);
  const total = Math.round(desc * 100) /100;
  this.descontoTotal = total;
  return total
}


  public deletaItem(item: any): void{
    let str = localStorage.getItem("ls.Cesta")
    let array = JSON.parse(str)
    array.splice(item,1)
    localStorage.setItem("ls.Cesta",JSON.stringify(array))
    this.cesta = this.storageFacade.cesta
    this.atualizaValores()
  }

  public setQuantidadeInput(item: any, quant: number): void{
    if(quant>0 && quant<=99){
      this.cesta[item].quantidade = quant
      this.CestaService.setQuantidadeInput(item, quant)
    }
    this.atualizaValores()
  }

  public diminuiQuantidade(item: any){
    if(this.cesta[item].quantidade>1 && this.cesta[item].quantidade <=99){
      this.cesta[item].quantidade--
      this.CestaService.diminuiQuantidade(item)
    }
    this.atualizaValores()
  }

  public aumentaQuantidade(item: any){
    if(this.cesta[item].quantidade>0 && this.cesta[item].quantidade <99){
      this.cesta[item].quantidade++
      this.CestaService.aumentaQuantidade(item)
    }  
    this.atualizaValores()
  }

}
