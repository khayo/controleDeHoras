import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Hora, HoraService, Setor, TipoRegistro } from '../shared';
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-cadastrar-hora',
  templateUrl: './cadastrar-hora.component.html',
  styleUrls: ['./cadastrar-hora.component.scss'],
})
export class CadastrarHoraComponent implements OnInit {

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
    private router: Router) {
      this.keysTipoRegistro = Object.keys(this.tipoRegistro);
      this.keysSetor = Object.keys(this.setor);
     }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      id: ['', []],
      hora: ['', []],
      tipo: ['', [Validators.required]],
      ultimoCliente: ['', []],
      equipe: ['', []],
      setor: ['',[]]
    })
  }

  cadastrar(){
    if(this.form.invalid){
      return false;
    }
    else {
      this.hora = this.form.value;
      this.horaService.cadastrar(this.hora);
      this.router.navigate(["/horas"]);
      let msg = "Apontamento realizado com sucesso";
      this.confirmacaoToast(msg);
    }
  }

  async confirmacaoToast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  teste(){
    console.log(this.form.controls);
  }
}
