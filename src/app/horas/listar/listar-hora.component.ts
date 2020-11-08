import { Component, OnInit } from '@angular/core';
import { Hora, HoraService, Setor, TipoRegistro } from '../shared';

@Component({
  selector: 'app-listar-hora',
  templateUrl: './listar-hora.component.html',
  styleUrls: ['./listar-hora.component.scss'],
})
export class ListarHoraComponent implements OnInit {
  
  horas: Hora[];
  tipoRegistro = TipoRegistro;
  setor = Setor;

  constructor(private horaService: HoraService) { }

  ngOnInit() {
    this.horas = this.listarTodos();
  }

  ionViewWillEnter(){
    this.horas = this.listarTodos();
  }

  listarTodos(): Hora[]{
    return this.horaService.listarTodos().reverse();
  }

}
