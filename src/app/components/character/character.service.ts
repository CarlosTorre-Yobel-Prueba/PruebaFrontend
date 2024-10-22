import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url_api = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get<any>(`${this.url_api}/api/characters`);
  }

  getCharatcerById(id: string){
    return this.http.get<any>(`${this.url_api}/api/characters/${id}`);

  }

  downloadCharacterPdf(id: string): Observable<Blob> {
    return this.http.get(`${this.url_api}/api/characters/${id}/pdf`, { responseType: 'blob' });
  }
}
