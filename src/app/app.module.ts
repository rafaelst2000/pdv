import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import{ ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { CestaComponent } from './cesta/cesta.component';
import { FooterComponent } from './footer/footer.component';
import { StorageFacade } from './core/persistence/storage.facade';
import { PersistenceService } from './core/persistence';
import { CoreModule } from './core/core.module';
import { FooterService } from './footer/services/footer.service';
import { CestaService } from './cesta/service/cesta.service';
import { ListaService } from './lista/service/lista.service';
import { FormsModule } from '@angular/forms';
import { MathTruncPipe } from './math-trunc.pipe';
import { BuscaRestService } from './lista/service/busca-rest.service'
import { HttpClientModule } from '@angular/common/http';
import { BuscaIntegrationService } from './lista/service/busca-integration.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CestaComponent,
    FooterComponent,
    MathTruncPipe

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    CoreModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
    StorageFacade,
    PersistenceService,
    FooterService,
    CestaService,
    ListaService,
    BuscaRestService,
    BuscaIntegrationService
    {provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
