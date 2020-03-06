import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './guards/auth.guard'
import { NologinGuard } from './guards/nologin.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),canActivate:[NologinGuard]
  },
  {
    path: 'registrate',
    loadChildren: () => import('./registrate/registrate.module').then( m => m.RegistratePageModule),canActivate:[NologinGuard]
  },
  {
    path: 'prueba',
    loadChildren: () => import('./prueba/prueba.module').then( m => m.PruebaPageModule)
  },
  {
    path: 'agregar-usuario',
    loadChildren: () => import('./agregar-usuario/agregar-usuario.module').then( m => m.AgregarUsuarioPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/usuarios/index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'crear',
    loadChildren: () => import('./pages/usuarios/crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./pages/usuarios/modificar/modificar.module').then( m => m.ModificarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
