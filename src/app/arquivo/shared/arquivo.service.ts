import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Hora } from 'src/app/horas';
import { Arquivo } from './arquivo.model';

@Injectable({
  providedIn: 'root'
})
export class ArquivoService {

  constructor() { }

  listarTodos(): Hora[] {
    const arquivos = localStorage['arquivos'];
    return arquivos ? JSON.parse(arquivos) : [];
  }

  selecionarTodos(): Hora[] {
    const horas = localStorage['horas'];
    return horas ? JSON.parse(horas) : []
  }

  arquivarTodos() {
    let arquivos = this.listarTodos();
    let horas = this.selecionarTodos();
    arquivos = arquivos.concat(horas);
    localStorage['arquivos'] = JSON.stringify(arquivos);
    localStorage['horas'] = [];
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
