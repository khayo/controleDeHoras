import { Hora } from 'src/app/horas';

export class Arquivo {

    constructor(
        public id?: number,
        public nome?: string,
        public horas?: Hora[] 
    ) {}
}