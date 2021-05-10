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
import {RezepteListeComponent} from './rezepte-liste/rezepte-liste.component';

import {RezeptDetailComponent} from './rezept-detail/rezept-detail.component';
import {MatSelectModule} from '@angular/material/select';
import {RezeptorderComponent} from './rezeptorder/rezeptorder.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LoginComponent } from './login/login.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
        AppComponent,
        UebersichtComponent,
        KuehlschrankComponent,
        ZutatenComponent,
        LiveviewComponent,
        RezepteComponent,
        RezepteListeComponent,
        RezeptDetailComponent,
        RezeptorderComponent,
        LoginComponent,
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
        FormsModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatTabsModule,
        MatButtonToggleModule,
        MatCardModule,
        MatSlideToggleModule,
        MatInputModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
