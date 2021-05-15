import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {FridgeComponent} from './fridge/fridge.component';
import {FridgeIngredientsComponent} from './fridge-ingredients/fridge-ingredients.component';
import {FridgeLiveViewComponent} from './fridge-live-view/fridge-live-view.component';
import {RecipeOrderComponent} from "./recipe-order/recipe-order.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'recipe',
    component: RecipeComponent
  },
  {
    path: 'recipe-list',
    component: RecipeListComponent
  },
  {
    path: 'recipe/:id/detail',
    component: RecipeDetailComponent
  },
  {
    path: 'recipe/:id/order',
    component: RecipeOrderComponent
  },
  {
    path: 'fridge',
    component: FridgeComponent
  },
  {
    path: 'fridge/ingredients',
    component: FridgeIngredientsComponent
  },
  {
    path: 'fridge/live-view',
    component: FridgeLiveViewComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
