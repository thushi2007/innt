import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UebersichtComponent} from './uebersicht/uebersicht.component';
import {KuehlschrankComponent} from './kuehlschrank/kuehlschrank.component';
import {ZutatenComponent} from './zutaten/zutaten.component';
import {LiveviewComponent} from './liveview/liveview.component';
import {RezepteComponent} from './rezepte/rezepte.component';
import {RezeptevorhandenzutatenComponent} from './rezeptevorhandenzutaten/rezeptevorhandenzutaten.component';
import {RezeptevorhandenzutatenvegetarischComponent} from './rezeptevorhandenzutatenvegetarisch/rezeptevorhandenzutatenvegetarisch.component';
import {RezeptevorhandenzutatenveganComponent} from './rezeptevorhandenzutatenvegan/rezeptevorhandenzutatenvegan.component';
import {RezeptdetailComponent} from './rezeptdetail/rezeptdetail.component';
import {RezeptorderComponent} from './rezeptorder/rezeptorder.component';
import {RezeptemitfehlendenzutatenComponent} from './rezeptemitfehlendenzutaten/rezeptemitfehlendenzutaten.component';
import {RezeptdetailohnezutatenComponent} from './rezeptdetailohnezutaten/rezeptdetailohnezutaten.component';

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
    path: 'rezepte/item',
    component: RezeptdetailComponent
  },
  {
    path: 'rezepte/item2',
    component: RezeptdetailohnezutatenComponent
  },
  {
    path: 'rezepte/bestellen',
    component: RezeptorderComponent
  },
  {
    path: 'rezepte/vorhandenezutaten',
    component: RezeptevorhandenzutatenComponent
  },
  {
    path: 'rezepte/fehlendezutaten',
    component: RezeptemitfehlendenzutatenComponent
  },
  {
    path: 'rezepte/vorhandenezutaten/vegetarisch',
    component: RezeptevorhandenzutatenvegetarischComponent
  },
  {
    path: 'rezepte/vorhandenezutaten/vegan',
    component: RezeptevorhandenzutatenveganComponent
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
    path: '**',
    redirectTo: 'uebersicht',
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
