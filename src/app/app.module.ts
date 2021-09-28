import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MostrarUsuariosComponent } from './components/mostrar-usuarios/mostrar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    MostrarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
