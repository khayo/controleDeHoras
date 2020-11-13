import { Component, OnInit } from '@angular/core';
import { Hora, Setor, TipoRegistro } from 'src/app/horas';
import { ArquivoService } from '../shared';

@Component({
  selector: 'app-listar-arquivo',
  templateUrl: './listar-arquivo.component.html',
  styleUrls: ['./listar-arquivo.component.scss'],
})
export class ListarArquivoComponent implements OnInit {
  
  horas: Hora[];
  tipoRegistro = TipoRegistro;
  setor = Setor;

  constructor(private arquivoService: ArquivoService) { }

  ngOnInit() {
    this.horas = this.listarTodos();
  }

  ionViewWillEnter(){
    this.horas = this.listarTodos();
  }

  listarTodos(): Hora[]{
    return this.arquivoService.listarTodos().reverse();
  }

}
