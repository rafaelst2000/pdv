import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';

@Injectable()
export class CestaService{

    constructor( private storageFacade: StorageFacade ){
        
    }
    
    public filtraNumero(valor: number): string{
        let novaStr: string
        novaStr = valor.toFixed(2)     
        return novaStr.replace(".",",");
        
    }

    public filtraDesconto(valor: number): string{
        return Math.trunc(valor).toString() 
    }

    public aumentaQuantidade(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)
        
        if(array[item].quantidade>0 && array[item].quantidade<99){    
            array[item].quantidade++
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
        }

    }

    public diminuiQuantidade(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(array[item].quantidade>1 && array[item].quantidade<=99){
            array[item].quantidade--
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
        }

    }

    public setQuantidadeInput(item: any, quant: number): void{

        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(quant>0 && quant<100){
            array[item].quantidade = quant
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
        }

    }

    public valorItem(item: any): string{
        return this.filtraNumero(item.produto.precoPor);
    }

}