import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MetodosService } from 'src/app/servicios/metodos.service';
import { Router } from '@angular/router';
import { UiService } from 'src/app/servicios/ui.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  registerForm: FormGroup
  constructor(
    private metodos: MetodosService,
    private navCtrl: NavController,
    private formBuilder: FormBuilder,
    private uiService:UiService
  ) {
    this.registerForm = this.formBuilder.group({
      email: ["", [
        Validators.required,
        //Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})'),
        Validators.email
      ]
      ],
      password: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
      ]
      ],
      rol: ['', Validators.required],
      confirm_password: [""],
      nombre: ["", Validators.required],
      telefono: ["", [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15)
      ]],
      estado:true
    });
    this.registerForm.get('confirm_password').setValidators([
      this.metodos.CustomValidators.equals(this.registerForm.get('password')),
      Validators.required
    ]);
  }

  ngOnInit() {
  }

  registrate() {
    this.uiService.presentLoading("Guardando Usuario...")
    .then(load=>{

      this.registerForm.value
      delete this.registerForm.value.confirm_password
      //this.metodos.registro(this.email, this.password, this.nombre, this.telefono).then(res => {
      //  this.router.navigate(['/tabs/tab1'])
      //}).catch(err => console.log(err));
      this.metodos.registro2(this.registerForm.value).then(() => {
        //this.router.navigate(['/tabs/tab1'])
        console.log("aceptado");
        load.dismiss()
        this.uiService.MessageToastSuccess("usuario guardado correctamente")
        this.navCtrl.back()
      }).catch(err => {
        console.log(err)
        this.uiService.MessageToastError("Error al guardar el usuario")
      });
    })
  }

}
