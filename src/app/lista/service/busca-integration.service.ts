import { Injectable, EventEmitter  } from "@angular/core";

@Injectable()
export class BuscaIntegrationService{

  public buscaItemPorDescricao$: EventEmitter<string> = new EventEmitter<string>();

    public buscarItemPorDescricao(descricao: string): void{
        this.buscaItemPorDescricao$.emit(descricao)
    }

}
