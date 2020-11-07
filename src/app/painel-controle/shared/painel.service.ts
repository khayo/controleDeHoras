import { Injectable } from '@angular/core';
import { Painel } from './painel.model';

@Injectable({
  providedIn: 'root'
})
export class PainelService {

  constructor() { }

  exibir(): Painel {
    const painel = localStorage['painel'];
    return painel ? JSON.parse(painel) : new Painel(null,null, null,null,null);
  } 

  salvar(painel: Painel): void {
    localStorage['painel'] = JSON.stringify(painel);
  }
}
