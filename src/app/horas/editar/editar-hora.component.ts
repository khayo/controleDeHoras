import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hora, HoraService, Setor, TipoRegistro } from '../shared';

@Component({
  selector: 'app-editar-hora',
  templateUrl: './editar-hora.component.html',
  styleUrls: ['./editar-hora.component.scss'],
})
export class EditarHoraComponent implements OnInit {

  hora: Hora;
  form: FormGroup;
  data: number;


  tipoRegistro = TipoRegistro;
  setor = Setor;
  keysTipoRegistro = [];
  keysSetor = [];

  constructor(
    private horaService: HoraService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router

  ) {
    this.keysTipoRegistro = Object.keys(this.tipoRegistro);
    this.keysSetor = Object.keys(this.setor);
  }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.gerarForm();
    this.hora = this.horaService.buscaPorId(id);
    this.passaValorParaForm();
  }
  
  gerarForm() {
    this.form = this.fb.group({
      id: ['', []],
      hora: ['', []],
      dia: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(31)]],
      mes: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(12)]],
      ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4) ]],
      horario: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(0), Validators.max(23)]],
      minuto: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(0), Validators.max(60)]],
      tipo: ['', [Validators.required]],
      ultimoCliente: ['', []],
      equipe: ['', []],
      setor: ['', []]
    })
  }
  
  atualizar() {
    if (this.form.invalid) return;
    this.transformaData();
    this.hora = this.form.value;
    this.hora.hora = this.data;
    console.log(this.hora);
   /*  this.horaService.atualizar(this.hora);
    this.router.navigate(["/horas"]); */
  }

  transformaData(){
    let dia = this.form.get('dia').value;
    let mes = this.form.get('mes').value;
    let ano = this.form.get('ano').value;
    let horario = this.form.get('horario').value;
    let minuto = this.form.get('minuto').value;
    
    this.data = new Date(ano, mes, dia, horario, minuto).getTime();
    console.log(this.data);
  }
  
  passaValorParaForm(){
    let temp = new Date(this.hora.hora);
    let dia = temp.getDay();
    let mes = temp.getMonth();
    let ano = temp.getFullYear();
    let horario = temp.getHours();
    let minuto = temp.getMinutes();
  
    this.form.get('id').setValue(this.hora.id);
    this.form.get('dia').setValue(dia + 1);
    this.form.get('mes').setValue(mes + 1);
    this.form.get('ano').setValue(ano);
    this.form.get('horario').setValue(horario);
    this.form.get('minuto').setValue(minuto);

    this.form.get('hora').setValue(this.hora.hora);
    this.form.get('tipo').setValue(this.hora.tipo);
    this.form.get('ultimoCliente').setValue(this.hora.ultimoCliente);
    this.form.get('equipe').setValue(this.hora.equipe);
    this.form.get('setor').setValue(this.hora.setor);

  }

  debud() {
    console.log(this.form.value);
    this.transformaData();
  }
  
}


