import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';

@Injectable()
export class ListaService{
    private lista = this.storageFacade

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


    public valorItem(item: any): string{
        return this.filtraNumero(item.produto.precoPor);
    }

    public adicionaItemCesta(item: any): void{
        let str = localStorage.getItem("ls.Lista")
        let arrayLista = JSON.parse(str)
        let str2 = localStorage.getItem("ls.Cesta")
        let cestaArray = JSON.parse(str2)
        if(cestaArray == null){
            cestaArray = []
        }    
        cestaArray = cestaArray.concat(arrayLista[item])
        cestaArray = cestaArray.reverse()
        localStorage.setItem("ls.Cesta",JSON.stringify(cestaArray))
        //this.refresh()
    }




    
    /*public adicionarItemNaLista(item: Item): void {
        const lista: Item[] = this.retornarLista();
        this.storageFacade.lista = lista.concat(item);
    }


    public buscarIndiceItem(item: Item): number {
        const lista: Item[] = this.retorntem: anyrLista();
        return lista.findIndex(e => e.idetem: anytificadorUnico == item.identificadorUnico);
    }


    public atualizarItemDaLista(item: Item): void {
        const lista: Item[] = this.retornarLista();
        lista[this.buscarIndiceItem(item)] = item;
        this.storageFacade.lista = lista;
    }
    

    public atualizarListaLocalStorage(itens: any): void {
        const lista = this.retornarLista();
        if (Array.isArray(itens)) lista.unshift(...itens);
        else lista.unshift(itens);
        this.storageFacade.lista = lista;
    }


    public verificarListaVazia(): boolean {
        const lista: Item[] = this.retornarLista();
        return lista.isEmpty();
    } */
}   