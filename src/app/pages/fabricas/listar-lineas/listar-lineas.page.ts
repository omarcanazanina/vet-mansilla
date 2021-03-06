import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { LineasService } from 'src/app/servicios/lineas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-lineas',
  templateUrl: './listar-lineas.page.html',
  styleUrls: ['./listar-lineas.page.scss'],
})
export class ListarLineasPage implements OnInit {
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

}
