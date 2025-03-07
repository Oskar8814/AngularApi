import { Component } from '@angular/core';
import { MusicService } from '../music.service';
import { Ialbum } from '../ialbum';

@Component({
  selector: 'app-busca-album',
  standalone: false,
  templateUrl: './busca-album.component.html',
  styleUrl: './busca-album.component.css'
})
export class BuscaAlbumComponent {
  album: string = '';
  results: Ialbum[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private musicService: MusicService) { }

  searchAlbum(): void {
    if (!this.album) return;
    this.loading = true;
    this.results = [];
    this.error = '';
    this.musicService.searchAlbum(this.album).subscribe(
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
