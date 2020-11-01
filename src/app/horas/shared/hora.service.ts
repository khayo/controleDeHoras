import { Injectable } from '@angular/core';

import { Hora } from "./";

@Injectable({
  providedIn: 'root'
})
export class HoraService {

  constructor() { }

  listarTodos(): Hora[] {
    const horas = localStorage['horas'];
    return horas ? JSON.parse(horas) : [];
  }

  cadastrar(hora: Hora): void {
    const horas = this.listarTodos();
    hora.id = new Date().getTime();
    hora.hora = new Date(new  Date().getTime());
    horas.push(hora);
    localStorage['horas'] = JSON.stringify(horas);
  }

  buscaPorId(id: number): Hora {
    const horas: Hora[] = this.listarTodos();
    return horas.find(hora => hora.id === id);
  }

  atualizar(hora: Hora): void {
    const horas: Hora[] = this.listarTodos();
    horas.forEach((obj, index, objs) => {
    if(hora.id === obj.id) {
      objs[index] = hora;
    }
  });
  localStorage['hora'] = JSON.stringify(horas);
  }

  remover(id: number): void {
    let horas: Hora[] = this.listarTodos();
    horas = horas.filter(hora => hora.id !== id);
    localStorage['horas'] = JSON.stringify(horas);
  }
}
