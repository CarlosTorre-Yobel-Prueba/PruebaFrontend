import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url_api = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getAllCharacters(){
    return this.http.get<any>(`${this.url_api}/api/characters`);
  }
}
