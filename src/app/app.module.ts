import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BuscaAutorComponent } from './busca-autor/busca-autor.component';
import { BuscaAlbumComponent } from './busca-album/busca-album.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IconoPipe } from './icono.pipe';
import { FormatDatePipe } from './format-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    BuscaAutorComponent,
    BuscaAlbumComponent,
    Pagina404Component,
    IconoPipe,
    FormatDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
