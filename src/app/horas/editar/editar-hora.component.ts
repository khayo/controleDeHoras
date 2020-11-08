import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Hora, HoraService, Setor, TipoRegistro } from '../shared';
import { ToastController, AlertController } from "@ionic/angular";

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
    public alertController: AlertController,
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
    this.form.setValue(this.hora);
    this.form.get('hora').setValue(new Date(this.hora.hora).toString());
  }

  gerarForm() {
    this.form = this.fb.group({
      id: ['', []],
      hora: ['', []],
      tipo: ['', [Validators.required]],
      ultimoCliente: ['', []],
      equipe: ['', []],
      setor: ['', []]
    })
  }

  atualizar() {
    if (this.form.invalid) return;
    this.hora = this.form.value;
    this.horaService.atualizar(this.hora);
    this.router.navigate(["/horas"]);
    let msg = "Apontamento atualizado.";
    this.mensagemToast(msg);
  }

  remover(hora: Hora): void {
    this.horaService.remover(hora.id);
    this.router.navigate(["/horas"]);
    let msg = "Apontamento apagado com sucesso!"
    this.mensagemToast(msg);
  }

  /* preencheObjeto() {
    this.hora.id = this.form.get('id').value;
    this.hora.hora = new Date (this.form.get('data').value).getTime();
    this.hora.tipo = this.form.get('tipo').value;
    this.hora.ultimoCliente = this.form.get('ultimoCliente').value;
    this.hora.equipe = this.form.get('equipe').value;
    this.hora.setor = this.form.get('setor').value;
  } */

/*   transformaData() {
    let dia = this.form.get('dia').value;
    let mes = this.form.get('mes').value - 1; //por algum motivo ele está salvando com 1 mes a mais
    let ano = this.form.get('ano').value;
    let horario = this.form.get('horario').value;
    let minuto = this.form.get('minuto').value;

    return new Date(ano, mes, dia, horario, minuto).getTime();
  }
  */

/*   preencheForm() {
    let temp = new Date(this.hora.hora);
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

    this.form.get('data').setValue(temp.toString());
    this.form.get('horarios').setValue(temp.toString());

  } */

  async mensagemToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async confirmarExclusao(hora: Hora) {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Deseja remover este registro?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            this.mensagemToast('Exclusão cancelada');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            this.remover(hora);
          }
        }
      ]
    });
    await alert.present();
  }
}


