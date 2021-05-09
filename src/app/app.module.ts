import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// own modules
import {CoreModule} from '@core/core.module';

// third party tools
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {NgxMaskModule} from 'ngx-mask';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {TransferHttpCacheModule} from '@nguniversal/common';

// own components
import {AppComponent} from './app.component';
import {AngularResizedEventModule} from 'angular-resize-event';
import {UebersichtComponent} from './uebersicht/uebersicht.component';
import {AppRoutingModule} from './app-routing.module';
import {KuehlschrankComponent} from './kuehlschrank/kuehlschrank.component';
import {ZutatenComponent} from './zutaten/zutaten.component';
import {LiveviewComponent} from './liveview/liveview.component';
import {RezepteComponent} from './rezepte/rezepte.component';
import {RezeptevorhandenzutatenComponent} from './rezeptevorhandenzutaten/rezeptevorhandenzutaten.component';
import {RezeptevorhandenzutatenvegetarischComponent} from './rezeptevorhandenzutatenvegetarisch/rezeptevorhandenzutatenvegetarisch.component';
import {RezeptevorhandenzutatenveganComponent} from './rezeptevorhandenzutatenvegan/rezeptevorhandenzutatenvegan.component';
import {RezeptdetailComponent} from './rezeptdetail/rezeptdetail.component';
import {MatSelectModule} from '@angular/material/select';
import {RezeptorderComponent} from './rezeptorder/rezeptorder.component';
import {RezeptemitfehlendenzutatenComponent} from './rezeptemitfehlendenzutaten/rezeptemitfehlendenzutaten.component';
import {RezeptdetailohnezutatenComponent} from './rezeptdetailohnezutaten/rezeptdetailohnezutaten.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UebersichtComponent,
    KuehlschrankComponent,
    ZutatenComponent,
    LiveviewComponent,
    RezepteComponent,
    RezeptevorhandenzutatenComponent,
    RezeptevorhandenzutatenvegetarischComponent,
    RezeptevorhandenzutatenveganComponent,
    RezeptdetailComponent,
    RezeptorderComponent,
    RezeptemitfehlendenzutatenComponent,
    RezeptdetailohnezutatenComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    TransferHttpCacheModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule.forRoot(),
    MatGoogleMapsAutocompleteModule,
    NgxMaskModule.forRoot({validation: false}),
    MatMomentDateModule,
    InfiniteScrollModule,
    AngularResizedEventModule,
    AppRoutingModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
