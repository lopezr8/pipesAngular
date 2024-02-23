import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localEsHN from '@angular/common/locales/es-HN'
import localEsCO from '@angular/common/locales/es-CO'
import localFrCA from '@angular/common/locales/fr-CA'


import { registerLocaleData} from '@angular/common'

registerLocaleData( localEsHN );
registerLocaleData( localEsCO );
registerLocaleData( localFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-CO' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
