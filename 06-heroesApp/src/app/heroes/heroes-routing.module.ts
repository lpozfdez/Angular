import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeroePageComponent } from './pages/heroePage/heroePage.component';

const routes: Routes = [
  {
    path: '' ,
    component: LayoutPageComponent,
    children: [
      { path: 'new-heroe', component: NewPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'edith/:id', component: NewPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: HeroePageComponent },// Hay q ponerlo el último, si no, no entraría en ninguno de los anteriores
      { path: '**', redirectTo: 'list' },//Lo q no sea ninguno de ellos redirecciona a list
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }