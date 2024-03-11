import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

// dominio.com/
const routes: Routes = [
  // Estas son mi definicion de rutas usando LAZYLOAD
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then( m => m.HeroesModule ),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  // Este es mi pagina por defecto por ruta y redirecciona a heroes
  {
    // dominio.com/''
    path: '',
    redirectTo: 'heroes',
    // El patchMatch hace un igual al path
    pathMatch: 'full'
  },
  {
    // Cualquier otra ruta que no hemos creado, redirecciona a uno que no funciona
    // El ** es para definir cualquier otra
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
