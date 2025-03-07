import { Component } from '@angular/core';
import { MusicService } from '../music.service';
import { Iartist } from '../iartist';

@Component({
  selector: 'app-busca-autor',
  standalone: false,
  templateUrl: './busca-autor.component.html',
  styleUrl: './busca-autor.component.css'
})
export class BuscaAutorComponent {
  artist: string = '';
  results: Iartist[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private musicService: MusicService) { }

  searchArtist(): void {
    if (!this.artist) return;
    this.loading = true;
    this.results = [];
    this.error = '';
    this.musicService.searchArtist(this.artist).subscribe(
      data => {
        this.results = data.content;
        this.loading = false;
      },
      err => {
        this.error = 'Error al obtener datos';
        this.loading = false;
      }
    );
  }
}

