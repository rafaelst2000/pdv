import { Produto } from './produto';
import { AutorizacaoPbmItemCesta } from './autorizacao-pbm-item-cesta';

export class Item {

    constructor(
        public contempladoConvenio: string = 'N',
        public produto?: Produto,
        public quantidade?: number,
        public receita?: any,
        public associado?: number,
        public codigoLiberador?: number,
        public categoriaItem?: string,
        public identificadorUnico?: number,
        public pbmAutorizada?: boolean,
        public naoPossuiEstoque?: boolean,
        public quantidadeEntregar?: number,
        public controle?: boolean,
        public conferido: boolean = false,
        public vendaAntecipada?: boolean,
        public planoBeneficioMedico?: any,
        public autorizacoesPbms?: AutorizacaoPbmItemCesta[],
        public itemPreVenda: boolean = false,
        public vendaFormula?: boolean
    ) {}

}
