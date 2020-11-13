import { Component, OnInit } from '@angular/core';
import { ArquivoService } from '../shared';

@Component({
  selector: 'app-criar-arquivo',
  templateUrl: './criar-arquivo.component.html',
  styleUrls: ['./criar-arquivo.component.scss'],
})
export class CriarArquivoComponent implements OnInit {

  constructor(
    private arquivoService: ArquivoService
  ) { }

  ngOnInit() {}

  arquivarTodos() {
    this.arquivoService.arquivarTodos();
  }
}
