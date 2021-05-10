import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UebersichtComponent} from './uebersicht/uebersicht.component';
import {KuehlschrankComponent} from './kuehlschrank/kuehlschrank.component';
import {ZutatenComponent} from './zutaten/zutaten.component';
import {LiveviewComponent} from './liveview/liveview.component';
import {RezepteComponent} from './rezepte/rezepte.component';
import {RezepteListeComponent} from './rezepte-liste/rezepte-liste.component';

import {RezeptDetailComponent} from './rezept-detail/rezept-detail.component';
import {RezeptorderComponent} from './rezeptorder/rezeptorder.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: 'uebersicht',
    component: UebersichtComponent
  },
  {
    path: 'rezepte',
    component: RezepteComponent
  },
  {
    path: 'rezepte/:id/detail',
    component: RezeptDetailComponent
  },
  {
    path: 'rezepte/bestellen',
    component: RezeptorderComponent
  },
  {
    path: 'rezepte/liste',
    component: RezepteListeComponent
  },
  {
    path: 'kuehlschrank',
    component: KuehlschrankComponent
  },
  {
    path: 'kuehlschrank/zutaten',
    component: ZutatenComponent
  },
  {
    path: 'kuehlschrank/liveview',
    component: LiveviewComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
