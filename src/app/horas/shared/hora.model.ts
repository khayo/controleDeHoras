import { tipoRegistro } from "./tipoRegistro.enum";

export class Hora {

    constructor(
        public id?: number,
        public hora?: Date,
        public tipo?: tipoRegistro
    ) {}
}