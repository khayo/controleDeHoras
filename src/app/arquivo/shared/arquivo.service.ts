import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Hora } from 'src/app/horas';

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

  arquivarEntre(inicio: Data, fim: Data) {

  }

  arquivarMesAnterior() {
    let horas: Hora[] = this.selecionarTodos();
    let arquivos = this.listarTodos()
    let horasParaArquivar = horas.filter(this.filtrarMesAnterior);
    arquivos = arquivos.concat(horasParaArquivar);
    console.log(arquivos);
    localStorage['arquivos'] = JSON.stringify(arquivos);

    horasParaArquivar.forEach((value) => {
      this.remover(value.id);
    });
  }


  filtrarMesAnterior(value, index, array) {

    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth();
    let dataRegistro = new Date(value.hora).getMonth();
    return dataRegistro == mesAtual - 1;
  }

  desarquivar(id: number): void {

  }

  remover(id: number): void {
    let horas: Hora[] = this.selecionarTodos();
    horas = horas.filter(hora => hora.id !== id);
    localStorage['horas'] = JSON.stringify(horas);
  }
}
