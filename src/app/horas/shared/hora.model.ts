import { tipoRegistro } from "./tipoRegistro.enum";
import { setor } from "./setor.enum";

export class Hora {

    constructor(
        public id?: number,
        public hora?: Date,
        public tipo?: tipoRegistro,
        public ultimoCliente?: string,
        public equipe?: string,
        public setor?: setor
    ) {}
}