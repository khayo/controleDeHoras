import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarHoraComponent } from 'src/app/horas/editar';
import { Painel, PainelService } from '../shared';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss'],
})
export class PainelComponent implements OnInit {

  painel: Painel;
  form: FormGroup;

  constructor(
    private painelService: PainelService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.gerarForm();
    this.exibir();
  }

  gerarForm() {
    this.form = this.fb.group({
      horaEntrada: ['', []],
      horaSaida: ['', []],
      tempoAlmoco: ['', []],
      salarioBruto: ['', []],
      periculosidade: ['', []]
    })
  }

  exibir() {
    this.painel = this.painelService.exibir();
    this.form.setValue(this.painel);  
  }

  salvar() {
    if (this.form.invalid) {
      return false;
    } else {
      this.painel = this.form.value;
      this.painelService.salvar(this.painel);      
    }
  }

}
