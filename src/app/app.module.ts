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
    PersistenceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
