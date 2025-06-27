import { Component, OnInit } from '@angular/core';
import { CharacterService, ReZeroCharacter } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: ReZeroCharacter[] = [];
  filteredCharacters: ReZeroCharacter[] = [];
  selectedSeason: string = 'Season 1';

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
     this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data;
      this.filteredCharacters = data;
      this.filterBySeason();
    });
  }
  
filterBySeason(): void {
  if (this.selectedSeason) {
    this.filteredCharacters = this.characters.filter(c => c.season.title === this.selectedSeason);
  } else {
    this.filteredCharacters = [...this.characters];
  }
}

}
