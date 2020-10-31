import { TipoRegistro } from "./tipoRegistro.enum";
import { Setor } from "./setor.enum";

export class Hora {

    constructor(
        public id?: number,
        public hora?: Date,
        public tipo?: TipoRegistro,
        public ultimoCliente?: string,
        public equipe?: string,
        public setor?: Setor
    ) {}
}