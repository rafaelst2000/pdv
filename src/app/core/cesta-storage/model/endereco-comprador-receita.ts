export class EnderecoCompradorReceita {
    constructor(public logradouro: string,
                public numero: number,
                public bairro: string,
                public complemento: string,
                public cep: string,
                public cidade: string,
                public uf?: string) {}
}