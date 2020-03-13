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
export class CestaService{
    private cesta = this.storageFacade
    constructor(
        private storageFacade: StorageFacade
    ){}


    public retornarCesta(): any[] {
        return this.storageFacade.cesta || [];
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
    

    public atualizarCestaLocalStorage(itens: any): void {
        const cesta = this.retornarCesta();
        if (Array.isArray(itens)) cesta.unshift(...itens);
        else cesta.unshift(itens);
        this.storageFacade.cesta = cesta;
    }


    /*public limparCesta(tituloModal?: string): EstadoCestaModel { {
          return this.limpezaSemPbm();
    } */


    public verificarCestaVazia(): boolean {
        const cesta: Item[] = this.retornarCesta();
        return cesta.isEmpty();
      }
}