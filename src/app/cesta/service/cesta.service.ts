import { Injectable } from "@angular/core";

import { StorageFacade } from '../../core/persistence/storage.facade';

@Injectable()
export class CestaService{

constructor( private storageFacade: StorageFacade ){ }

    public aumentaQuantidadeStorage(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(array[item].quantidade>0 && array[item].quantidade<99){
            array[item].quantidade++
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
        }
    }

    public diminuiQuantidadeStorage(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(array[item].quantidade>0 && array[item].quantidade<=99){
            array[item].quantidade--
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
        }
    }

    public alteraQuantidadeInputStorage(item: any, quant: number): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(quant>0 && quant<100){
            array[item].quantidade = quant
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
        }
    }

    public deletaItemStorage(item: any){
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)
        array.splice(item,1)
        localStorage.setItem("ls.Cesta",JSON.stringify(array))
    }

    public totalLiquidoCesta(){
        const itensCesta = this.storageFacade.cesta || [];
        const valor = itensCesta.reduce((acc, cur) => acc += cur.quantidade * cur.produto.precoPor, 0)
        const total =  Math.round(valor * 100) / 100
        return total
    }

    public totalDescontosCesta(){
        const itensCesta = this.storageFacade.cesta || []
        const desc = itensCesta.reduce((acc, cur) => acc += cur.quantidade * (cur.produto.precoDe - cur.produto.precoPor), 0)
        const total = Math.round(desc * 100) /100
        return total
    }
}
