import { Medico } from './medico';
import { Paciente } from './paciente';
import { Comprador } from './comprador';
import { ConvenioReceita } from './convenio-receita';

export class Receita {
    constructor(
        public numeroRegistro: string,
        public siglaUf: string,
        public uf: string,
        public tipoProfissional: number,
        public tipoCaptacao: Array<string>,
        public dataReceita: string,
        public dataCompra: string,
        public codigoFuncionario: number,
        public numeroNotificacao?: string,
        public notificacao?: string,
        public ufNotificacao?: string,
        public codigoModeloReceita?: number,
        public comprador?: Comprador,
        public paciente?: Paciente,
        public medico?: Medico,
        public convenio?: ConvenioReceita,
        public vendaAntecipada?: boolean,
        public captura?: boolean
    ) {}
}