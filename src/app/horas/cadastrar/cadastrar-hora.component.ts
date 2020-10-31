import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hora, HoraService } from '../shared';

@Component({
  selector: 'app-cadastrar-hora',
  templateUrl: './cadastrar-hora.component.html',
  styleUrls: ['./cadastrar-hora.component.scss'],
})
export class CadastrarHoraComponent implements OnInit {

  hora: Hora;
  form: FormGroup;

  constructor(
    private horaService: HoraService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      id: ['', []],
      hora: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      ultimoCliente: ['', []],
      equipe: ['', []],
      setor: ['',[]]
    })
  }

  cadastrar(){
    if(this.form.invalid){
      console.log('Informe todos os dados');
      return false;
    }
    else {
      this.hora = this.form.value;
      this.horaService.cadastrar(this.hora);
      this.router.navigate(["/horas"]);
    }


  }
}
