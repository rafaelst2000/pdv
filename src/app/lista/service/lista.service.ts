import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { LocationService } from "../../core";
import { ConvenioStorage } from '../../core/persistence';
import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';
import { QueryParamsInterface } from "../../core/location/query-params.interface";
import { EnderecoEntregaStorage } from "../../core/persistence/model/entrega/endereco-entrega.storage";
import { PoliticasDescontoStorage } from '../../core/persistence/model/politicas-desconto/politicas-desconto-model';

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





    
    /*public adicionarItemNaLista(item: Item): void {
        const lista: Item[] = this.retornarLista();
        this.storageFacade.lista = lista.concat(item);
    }


    public buscarIndiceItem(item: Item): number {
        const lista: Item[] = this.retornarLista();
        return lista.findIndex(e => e.identificadorUnico == item.identificadorUnico);
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