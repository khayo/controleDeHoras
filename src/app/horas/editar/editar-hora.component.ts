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


