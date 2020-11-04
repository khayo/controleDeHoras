import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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
    console.log('ngOnInit');
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
    console.log(this.painel);
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
