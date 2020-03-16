import { Injectable } from '@angular/core';
import { StorageFacade } from '../../core/persistence/storage.facade';
import { Item } from '../../core/cesta-storage/model/item';

@Injectable()
export class FooterService {

    constructor(
        private storageFacade: StorageFacade
    ){ }

    public totalLiquidoCesta(): number {
        const itensCesta = this.storageFacade.cesta || [];
        const total = itensCesta.reduce((acc, cur) => acc += cur.quantidade * cur.produto.precoPor, 0);
        return Math.round(total * 100) / 100;
    } 

    public totalDescontosCesta(): number {
        const itensCesta = this.storageFacade.cesta || [];
        const desc = itensCesta.reduce((acc, cur) => acc += cur.quantidade * (cur.produto.precoDe - cur.produto.precoPor), 0);
        return Math.round(desc * 100) /100;

    }
    public filtraNumero(valor: number): string{
        let novaStr: string
        novaStr = valor.toFixed(2)     
        return novaStr.replace(".",",");
    }
}      