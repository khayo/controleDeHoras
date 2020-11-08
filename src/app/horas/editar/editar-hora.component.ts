import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hora, HoraService, Setor, TipoRegistro } from '../shared';
import { ToastController } from "@ionic/angular";
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-editar-hora',
  templateUrl: './editar-hora.component.html',
  styleUrls: ['./editar-hora.component.scss'],
})
export class EditarHoraComponent implements OnInit {

  hora: Hora;
  form: FormGroup;


  tipoRegistro = TipoRegistro;
  setor = Setor;
  keysTipoRegistro = [];
  keysSetor = [];

  constructor(
    private toastController: ToastController,
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
    this.preencheForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      id: ['', []],
      hora: ['', []],
      dia: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(31)]],
      mes: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2), Validators.min(1), Validators.max(12)]],
      ano: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
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
    this.preencheObjeto();
    this.horaService.atualizar(this.hora);
    this.router.navigate(["/horas"]);
    let msg = "Apontamento atualizado.";
    this.menssagemToast(msg);
  }


  remover($event: any, hora: Hora): void {
    $event.preventDefault();
    if(confirm('Deseja remover este registro?')){
      this.horaService.remover(hora.id);
      this.router.navigate(["/horas"]);
      let msg = "Apontamento apagado com sucesso!"
      this.menssagemToast(msg);
    }
  }


  preencheObjeto() {
    this.hora.id = this.form.get('id').value;
    this.hora.hora = this.transformaData();
    this.hora.tipo = this.form.get('tipo').value;
    this.hora.ultimoCliente = this.form.get('ultimoCliente').value;
    this.hora.equipe = this.form.get('equipe').value;
    this.hora.setor = this.form.get('setor').value;
  }

  transformaData() {
    let dia = this.form.get('dia').value;
    let mes = this.form.get('mes').value - 1; //por algum motivo ele está salvando com 1 mes a mais
    let ano = this.form.get('ano').value;
    let horario = this.form.get('horario').value;
    let minuto = this.form.get('minuto').value;

    return new Date(ano, mes, dia, horario, minuto).getTime();
  }

  preencheForm() {
    let temp = new Date(this.hora.hora);
    console.log('hora.hora')
    console.log(this.hora.hora);
    console.log('temp')
    console.log(temp);
    let dia = temp.getDate();
    let mes = temp.getMonth() + 1; //por algum motivo esta mostrando com um mês a menos
    let ano = temp.getFullYear();
    let horario = temp.getHours();
    let minuto = temp.getMinutes();

    this.form.get('id').setValue(this.hora.id);
    this.form.get('dia').setValue(dia);
    this.form.get('mes').setValue(mes);
    this.form.get('ano').setValue(ano);
    this.form.get('horario').setValue(horario);
    this.form.get('minuto').setValue(minuto);

    this.form.get('hora').setValue(this.hora.hora);
    this.form.get('tipo').setValue(this.hora.tipo);
    this.form.get('ultimoCliente').setValue(this.hora.ultimoCliente);
    this.form.get('equipe').setValue(this.hora.equipe);
    this.form.get('setor').setValue(this.hora.setor);

  }

  async menssagemToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  debud() {
    console.log(this.form.value);
    this.transformaData();
  }

}


