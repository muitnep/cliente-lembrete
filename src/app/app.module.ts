import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorMsgComponent } from './compartilhado/error-msg/error-msg.component';
import { ListaLembreteComponent } from './paginas/lista-lembrete/lista-lembrete.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorMsgComponent,
    ListaLembreteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
