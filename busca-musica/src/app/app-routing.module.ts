import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { BuscaAutorComponent } from './busca-autor/busca-autor.component';
import { BuscaAlbumComponent } from './busca-album/busca-album.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {path:'', component:BienvenidaComponent},
  {path:'bienvenida', component:BienvenidaComponent},
  {path:'buscaautor', component:BuscaAutorComponent},
  {path:'buscaalbum', component:BuscaAlbumComponent},
  {path:'**', component:Pagina404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
