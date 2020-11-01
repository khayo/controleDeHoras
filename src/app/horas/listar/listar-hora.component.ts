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
/*     let data = Date.now();   
    let teste = new  Date().getTime();
    this.horas = [
      new Hora(1, TipoRegistro.ENTRADA, data, "Setin Downtown", "Guilherme", Setor.EMERGENCIA),
      new Hora(2, TipoRegistro.SAIDA, teste,"Murano", "Guilherme", Setor.PREVENTIVA),
    ] ; */

  }

  ionViewWillEnter(){
    this.horas = this.listarTodos();
  }

  listarTodos(): Hora[]{
    return this.horaService.listarTodos();
  }

}
