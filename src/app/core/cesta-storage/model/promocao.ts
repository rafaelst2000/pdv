export class Promocao {
    constructor(public codigoFilialPromotora?: number,
                public codigoPromocao?: number,
                public percentualDesconto?: number,
                public tipoPromocao?: string,
                public dataInicio?: string,
                public dataFinal?: string,
                public perfil?: number) {}
}