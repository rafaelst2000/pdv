export class HorarioRotaStorage {
    constructor(
        public codigoRota?: number,
        public dataEntrega?: string,
        public dataFinal?: string,
        public dataInicial?: string,
        public horaFinal?: number,
        public horaInicial?: number,
        public periodo?: string
    ) {}
}