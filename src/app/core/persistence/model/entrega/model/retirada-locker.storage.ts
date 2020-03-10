export class RetiradaLockerStorage {
    constructor(
        public dataEntrega?: Date,
        public formaDeEntrega?: number,
        public idLocker?: number,
        public nomeLocker?: string,
        public portaLocker?: string,
        public reserva?: string,
        public senhaReserva?: string,
        public tipoDeEntrega?: number
    ) {}
}