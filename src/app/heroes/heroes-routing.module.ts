import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';


// localhost:4200/heroes
const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-hero', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      // Con los :/id -> mando un argumento... ej: http://localhost:4200/heroes/edit/34
      { path: 'edit/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      // Si aqui no coincide,ejemplo: http://localhost:4200/heroes/loqsea
      // mostrara el componente de hero
      { path: ':id', component: HeroPageComponent },
      // el ** redirecciona si en la ruta no se especifica un path
      // ejemplo: http://localhost:4200/heroes -> http://localhost:4200/heroes/list
      { path: '**', redirectTo: 'list' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
