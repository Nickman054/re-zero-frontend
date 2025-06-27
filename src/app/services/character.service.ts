import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ReZeroCharacter {
  name: string;
  ability: { name: string };
  faction: { name: string };
  season: { title: string };
   imageUrl: string;
}
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080/api/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<ReZeroCharacter[]> {
    return this.http.get<ReZeroCharacter[]>(`${this.apiUrl}/getAll`);
  }

   getCharacterByName(name: string): Observable<ReZeroCharacter> {
    return this.http.get<ReZeroCharacter>(`${this.apiUrl}/getByName/${name}`);
  }
}
