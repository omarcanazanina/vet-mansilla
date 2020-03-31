import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { LineasService } from '../servicios/lineas.service';
import { AgregarLineaPage } from '../agregar-linea/agregar-linea.page';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.page.html',
  styleUrls: ['./lineas.page.scss'],
})
export class LineasPage implements OnInit {
  id:any
  nombre:any
  lista_lineas:any
  constructor(private activatedRoute: ActivatedRoute,
    private alertController:AlertController,
    //private db:AngularFirestore,
    private lineas:LineasService,
    private modal:ModalController) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.nombre = this.activatedRoute.snapshot.paramMap.get('nombre')
    this.lineas.recuperalineas(this.id).subscribe(datos =>{
      this.lista_lineas = datos
    })
    
  }

  async ir() {
   const modal= await this.modal.create({
      component : AgregarLineaPage,
      componentProps:{
       id:this.id,
        nombre:this.nombre 
      }
    })
    await modal.present()
    const data = await modal.onDidDismiss();
    console.log('retorno' + data);
    
  //  const alert = await this.alertController.create({
  //    header: 'Crear línea',
  //    backdropDismiss: false,
  //    inputs: [
  //      {
  //        name: 'linea',
  //        type: 'text',
  //        placeholder: 'Nombre '
  //      }
  //    ],
  //    buttons: [
  //      {
  //        text: 'Cancelar',
  //        role: 'cancel',
  //        cssClass: 'secondary',
  //        handler: () => {
  //          console.log('Confirm Cancel');
  //        }
  //      }, {
  //        text: 'Aceptar',
  //        handler: dato => {
  //          console.log(dato.fabrica);
  //          this.db.collection('/fabrica/'+this.id+'/linea').add({
  //            nombre: dato.linea
  //          })
  //        }
  //      }
  //    ]
  //  });
  //  await alert.present();
  }

}
