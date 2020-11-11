import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Arquivo } from './arquivo.model';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor() { }

  listarTodos(): Arquivo[] {
    const arquivos = localStorage['arquivos'];
    return arquivos ? JSON.parse(arquivos) : [];
  }

  arquivarTodos() {
    
  }

  arquivarEntre(inicio: Data, fim: Data){

  }

  arquivarMesAnterior(){

  }

  arquivarAntesDe(limite: Data) {

  }

  desarquivar(id: number): void{

  }

  remover(id: number): void{

  }
}
