import { EnderecoCompradorReceita } from './endereco-comprador-receita';

export class Comprador {
    constructor(public cpf?: string,
                public rg?: string,
                public rgOrgaoEmissor?: string,
                public pais?: string,
                public uf?: string,
                public nome?: string,
                public numeroTelefone?: string,
                public dddTelefone?: string,
                public endereco?: EnderecoCompradorReceita) {}
}