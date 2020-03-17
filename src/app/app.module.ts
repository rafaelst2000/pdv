import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { CestaComponent } from './cesta/cesta.component';
import { FooterComponent } from './footer/footer.component';
import { StorageFacade } from './core/persistence/storage.facade';
import { PersistenceService } from './core/persistence';
import { CoreModule } from './core/core.module';
import { FooterService } from './footer/services/footer.service'
import { CestaService } from './cesta/service/cesta.service';
import { ListaService } from './lista/service/lista.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CestaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [
    StorageFacade,
    PersistenceService,
    FooterService,
    CestaService,
    ListaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
