import { Injectable } from "@angular/core";

import { StorageFacade } from '../../core/persistence/storage.facade';

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
        novaStr = valor.toString()

        if(novaStr.indexOf(".")==-1){
           novaStr = novaStr.concat(",00")
        }      
       // if(novaStr.split(","))
        return novaStr.replace(".",",");
    } //tratar os casos decimal com split

    public clicou(index: number){
        console.log("clicou no item: "+index)
    }

   /* public removeItemCesta(item: any): void{
        Storage.prototype.removeItem(Cesta);
    }

    protected removerItemCesta(item: Item): void {
        const cesta: Item[] = this.retornarCesta();
        this.storageFacade.cesta = cesta.filter(e => !this.validarItensIguais(e, item));    
        this.remocaoVendaStorage();
    }

    protected validarItensIguais(itemA: any, itemB: any): boolean {
        return itemA.identificadorUnico == itemB.identificadorUnico &&
          itemA.produto.codigo == itemB.produto.codigo;
    }
    
    protected remocaoVendaStorage(): void {
        const cesta = this.retornarCesta();
        const cliente = this.storageFacade.clienteStorage;
        if (cesta.isEmpty(cesta) && cliente == null) this.storageFacade.vendaStorage = null;
    } */
}