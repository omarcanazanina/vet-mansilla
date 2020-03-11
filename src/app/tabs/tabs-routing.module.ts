import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            loadChildren: () => import('../pages/usuarios/index/index.module').then( m => m.IndexPageModule)
          },
          {
            path: 'crear',
            loadChildren: () => import('../pages/usuarios/crear/crear.module').then( m => m.CrearPageModule)
          },
          {
            path: 'modificar',
            loadChildren: () => import('../pages/usuarios/modificar/modificar.module').then( m => m.ModificarPageModule)
          },
          {
            path: 'ver',
            loadChildren: () => import('../pages/usuarios/ver/ver.module').then( m => m.VerPageModule)
          },
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/usuarios',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
