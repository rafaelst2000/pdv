export class EnderecoStorage {
    constructor(
        public bairro: string,
        public cep: number,
        public cidade: string,
        public codigoLocalidade: number,
        public codigoLogradouro: number,
        public complemento: string,
        public latitude: number,
        public longitude: number,
        public nomeLogradouro: string,
        public tipoLogradouro: string,
        public uf: string,
        public logradouro?: string,
        public telefone?: string,
        public numero?: number,
        public numeroEndereco?: number
    ) { }
}

// Endereço da Filial