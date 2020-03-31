import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LineasPageRoutingModule } from './lineas-routing.module';

import { LineasPage } from './lineas.page';
import { ComponentsModule } from '../components/components.module';
import { AgregarLineaPage } from '../agregar-linea/agregar-linea.page';
import { AgregarLineaPageModule } from '../agregar-linea/agregar-linea.module';

@NgModule({
  entryComponents:[
    AgregarLineaPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LineasPageRoutingModule,
    ComponentsModule,
    AgregarLineaPageModule
  ],
  declarations: [LineasPage]
})
export class LineasPageModule {}
