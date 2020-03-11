import { Promocao } from './promocao';
import { RegraFiscal } from './regra-fiscal';
import { ProdutoPackModel } from './produto-pack.model';

export class Produto {
    constructor(
        public categoriaItem: string,
        public classeTerapeutica: string,
        public codigo: number,
        public codigoBarrasItem: number,
        public codigoPrincipioAtivo: number,
        public codPromocao: number,
        public ean: number,
        public entregaTele: boolean,
        public estoque: number,
        public estoqueCd: number,
        public estoqueTotal: number,
        public estoqueReservaVirtual: number,
        public geraDadosFornecedor: boolean,
        public imagem: string,
        public lote: string,
        public nome: string,
        public origemDesconto: string,
        public tipoDesconto: number,
        public participaListaReferencial: boolean,
        public participaPack: boolean,
        public participaPbm: boolean,
        public percentualDesconto: number,
        public regraFiscal: RegraFiscal,
        public permiteAdesao: boolean,
        public possuiAlternativos: boolean,
        public possuiGenericos: boolean,
        public possuiGenericosPorPrincipioAtivo: boolean,
        public possuiReferenciaPorPrincipioAtivo: boolean,
        public possuiSimilaresPorPrincipioAtivo: boolean,
        public precoDe: number,
        public precoPor: number,
        public principioAtivo: string,
        public psicotropico: boolean,
        public retencaoReceita: boolean,
        public situacaoItem: string,
        public valorDesconto: number,
        public possuiEanImpresso: boolean = false,
        public convenio?: any,
        public itemGeladeira?: boolean,
        public participaFarmaciaPopular?: boolean,
        public possuiKitAdesao?: boolean,
        public promocao?: Promocao,
        public qtdApresentacaoUnitaria?: number,
        public exclusivoPanvel?: boolean,
        public codigoQuadroOferta?: number,
        public pack?: ProdutoPackModel,
        public participaPackNovo?: boolean,
        public possuiItemAVencer?: boolean) { }

}