import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router:Router,
              private alertController:AlertController,
              private db: AngularFirestore) {}

  async ir() {
    const alert = await this.alertController.create({
      header: 'Crear fábrica',
      backdropDismiss:false,
      inputs: [
        {
          name: 'fabrica',
          type: 'text',
          placeholder: 'Nombre '
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: dato => {
            console.log(dato.fabrica);
            this.db.collection('fabrica').add({
              nombre:dato.fabrica
            })
          }
        }
      ]
    });
    await alert.present();
  }
}
