import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { ProfissionalSaudeRespnse } from '../integration/profissional-saude.response';
import { ConfiguracaoAmbienteService } from "../../../configuracao/ambiente-configuracao/ambiente-configuracao.service";

@Injectable()
export class MedicoRestService {

    constructor(private http: HttpClient,
        private configuracaoAmbienteService: ConfiguracaoAmbienteService) {
    }    
    public getMedico(uf: string ,tipo: number, codigoRegistro: number): Observable<ProfissionalSaudeRespnse[]>{
        return Observable.of({})
        .switchMap(res => this.configuracaoAmbienteService.obterConfiguracoes())
        .switchMap(ret=>{ return this.http.get<ProfissionalSaudeRespnse[]>(`${ret.RECEITA_V1}/prescritores?codigoRegistro=${codigoRegistro}&tipo=${tipo}&uf=${uf}`)})
    }    
}
