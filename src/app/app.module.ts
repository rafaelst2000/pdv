import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaComponent } from './lista/lista.component';
import { CestaComponent } from './cesta/cesta.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CestaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
