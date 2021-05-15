import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {HomeComponent} from './home/home.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RecipeComponent} from './recipe/recipe.component';
import {MatIconModule} from '@angular/material/icon';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { FridgeComponent } from './fridge/fridge.component';
import { FridgeIngredientsComponent } from './fridge-ingredients/fridge-ingredients.component';
import { FridgeLiveViewComponent } from './fridge-live-view/fridge-live-view.component';
import { RecipeOrderComponent } from './recipe-order/recipe-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    FridgeComponent,
    FridgeIngredientsComponent,
    FridgeLiveViewComponent,
    RecipeOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FormsModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
