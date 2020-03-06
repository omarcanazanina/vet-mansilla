import { Component, OnInit } from '@angular/core';
import { NavController, ActionSheetController } from '@ionic/angular';
import { UsuarioService, Usuario } from 'src/app/servicios/usuario.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/servicios/ui.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  vendedores: Usuario[] = []
  repartidores: Usuario[] = []
  venSubs: Subscription
  repSubs: Subscription
  constructor(
    private navCtrl: NavController,
    private usuarioService: UsuarioService,
    private uiService: UiService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {

    this.venSubs = this.usuarioService.listarEmpleados("vendedor")
      .subscribe(res => {
        console.log(res);
        this.vendedores = res
      })
    this.repSubs = this.usuarioService.listarEmpleados("repartidor")
      .subscribe(res => {
        console.log(res);
        this.repartidores = res
      })
  }
  ngOnDestroy(): void {
    this.venSubs.unsubscribe()
    this.repSubs.unsubscribe()
  }
  crearUsuario() {
    this.navCtrl.navigateForward(['tabs/usuarios/crear'])
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          icon: 'eye',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Modificar',
          icon: 'create',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });

    await actionSheet.present();
  }
}
