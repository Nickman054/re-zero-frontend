import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RezeroCharacter } from '../models/rezero-character.model'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<RezeroCharacter[]> {
    return this.http.get<RezeroCharacter[]>(`${this.apiUrl}/getAll`);
  }

   getCharacterByName(name: string): Observable<RezeroCharacter> {
    return this.http.get<RezeroCharacter>(`${this.apiUrl}/getByName/${name}`);
  }
}
