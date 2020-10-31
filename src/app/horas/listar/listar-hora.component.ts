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

  constructor(private horaService: HoraService) { }

  ngOnInit() {
    this.horas = this.listarTodos();
    let data = new Date(1603586748659);    
    let date = new Date().getTime();
    let dia = new Date(date);
    let teste = new Date(new  Date().getTime());
    this.horas = [
      new Hora(1, data, TipoRegistro.ENTRADA, "Setin Downtown", "Guilherme", Setor.EMERGENCIA),
      new Hora(2, teste, TipoRegistro.SAIDA, "Murano", "Guilherme", Setor.PREVENTIVA),
    ]
  }
  listarTodos(): Hora[]{
    return this.horaService.listarTodos();
  }

}
