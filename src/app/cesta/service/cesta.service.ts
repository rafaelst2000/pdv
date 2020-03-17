import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';

@Injectable()
export class CestaService{
    private cesta = this.storageFacade

    constructor(
        private storageFacade: StorageFacade
    ){}
    public refresh(): void{
        location.reload(true)
    }
    
    public filtraNumero(valor: number): string{
        let novaStr: string
        novaStr = valor.toFixed(2)     
        return novaStr.replace(".",",");
    }


    public filtraDesconto(valor: number): string{
        return Math.trunc(valor).toString() 
    }


    public deletaItem(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)
        array.splice(item,1)
        localStorage.setItem("ls.Cesta",JSON.stringify(array))
        this.cesta = this.storageFacade
        this.refresh()
    }

    public aumentaQuantidade(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)
        
        if(array[item].quantidade>0 && array[item].quantidade<99){
            array[item].quantidade++
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
            this.cesta = this.storageFacade
            this.refresh()
        }
        
    }


    public diminuiQuantidade(item: any): void{
        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(array[item].quantidade>1 && array[item].quantidade<=99){
            array[item].quantidade--
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
            this.cesta = this.storageFacade
            this.refresh()
        }

    }


    public setQuantidadeInput(item: any,i: any): void{

        let str = localStorage.getItem("ls.Cesta")
        let array = JSON.parse(str)

        if(i.target.value>0 && i.target.value<100){
            array[item].quantidade = i.target.value
            localStorage.setItem("ls.Cesta",JSON.stringify(array))
            this.cesta = this.storageFacade
            this.refresh()
        }
        console.log("Change: "+i.target.value)
    }

    public valorItem(item: any): string{
        return this.filtraNumero(item.produto.precoPor);
    }








/*
    public adicionarItemNaCesta(item: Item): void {
        const cesta: Item[] = this.retornarCesta();
        this.storageFacade.cesta = cesta.concat(item);
    }


    public buscarIndiceItem(item: Item): number {
        const cesta: Item[] = this.retornarCesta();
        return cesta.findIndex(e => e.identificadorUnico == item.identificadorUnico);
    }


    public atualizarItemDaCesta(item: Item): void {
        const cesta: Item[] = this.retornarCesta();
        cesta[this.buscarIndiceItem(item)] = item;
        this.storageFacade.cesta = cesta;
    }
    
    public valorItem(item: any): string{
        return this.filtraNumero(item.produto.precoPor);
    }

    
    public valorItem(item: any): string{
        return this.filtraNumero(item.produto.precoPor);
    }estaLocalStorage(itens: any): void {
        const cesta = this.retornarCesta();
        if (Array.isArray(itens)) cesta.unshift(...itens);
        else cesta.unshift(itens);
        this.storageFacade.cesta = cesta;
    }


    public limparCesta(tituloModal?: string): EstadoCestaModel { {
          return this.limpezaSemPbm();
    } 


    public verificarCestaVazia(): boolean {
        const cesta: Item[] = this.retornarCesta();
        return cesta.isEmpty();
    }*/
}