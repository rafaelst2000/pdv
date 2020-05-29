import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Observable';

import { Item } from '../../core/cesta-storage/model/item';
import { StorageFacade } from '../../core/persistence/storage.facade';
import { BuscaRestService } from './busca-rest.service'


@Injectable()
export class ListaService{
    private lista = this.storageFacade

    constructor(private storageFacade: StorageFacade,
                private buscaRestService: BuscaRestService){}


    public buscarItens(descricao: string): Observable<Item[]>{
      return this.buscaRestService.buscar(descricao)
        .map(items => items.filter(item => item.produto.nome.toUpperCase().includes(descricao.toUpperCase())))
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
      console.log(item)
       if(!this.itemExists(item)){
            let str2 = localStorage.getItem("ls.Cesta")
            let cestaArray = JSON.parse(str2)
            cestaArray = cestaArray.concat(item)
            cestaArray = cestaArray.reverse()
            localStorage.setItem("ls.Cesta",JSON.stringify(cestaArray))
        }
    }

    public itemExists(item: any): boolean{
        let str = localStorage.getItem("ls.Cesta")
        let arrayLista = [item]
        if(str == null || str == "")
            localStorage.setItem("ls.Cesta",JSON.stringify(arrayLista))
        else{
            arrayLista = JSON.parse(str)
            let index = arrayLista.findIndex(val => val.produto.nome == item.produto.nome)
            if(index<0)
                return false
            else
                return true
        }
    }
}
