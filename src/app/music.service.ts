import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'https://api.reccobeats.com/v1';

  constructor(private http: HttpClient) { }

  searchArtist(artist: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/artist/search?searchText=${artist}`);
  }
  
  searchAlbum(album: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/album/search?searchText=${album}`);
  }
}
