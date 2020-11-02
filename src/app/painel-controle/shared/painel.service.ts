import { Injectable } from '@angular/core';
import { Painel } from './painel.model';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  constructor() { }

  exibir(): Painel {
    const painel = localStorage['painel'];
    return painel ? JSON.parse(painel) : [];
  } 

  salvar(painel: Painel): void {
    const parametros = this.exibir();
    localStorage['painel'] = JSON.stringify(parametros);
  }
}
