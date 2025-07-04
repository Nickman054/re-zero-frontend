import { Component, OnInit } from '@angular/core';
import { RezeroCharacter } from 'src/app/models/rezero-character.model';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: RezeroCharacter[] = [];
  filteredCharacters: RezeroCharacter[] = [];
  selectedSeason: string = 'Season 1';
  searchName: string = '';
  currentPage: number = 1;
  temsPerPage: number = 8;
  totalPages: number = 1;
  


  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
     this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data;
      this.filteredCharacters = data;
      this.applyFilters();
    });
  }
  
applyFilters(): void {
  const filtered = this.characters.filter(character => {
    const matchesSeason =
      this.selectedSeason === 'All'
      || (character.seasons?.some(season => season.seasonTitle === this.selectedSeason));

    const matchesName =
      this.searchName.trim() === ''
      || character.name.toLowerCase().includes(this.searchName.toLowerCase());

    return matchesSeason && matchesName;
  });

  this.totalPages = Math.ceil(filtered.length / this.temsPerPage);
  this.currentPage = 1;
  this.filteredCharacters = this.paginate(filtered);
}
paginate(characters: RezeroCharacter[]): RezeroCharacter[] {
  const start = (this.currentPage - 1) * this.temsPerPage;
  return characters.slice(start, start + this.temsPerPage);
}

nextPage(): void {
  if (this.currentPage < this.totalPages) {
    this.currentPage++;
    this.filteredCharacters = this.paginate(
      this.characters.filter(character => {
        const matchesSeason =
          this.selectedSeason === 'All' || character.seasons.some(
           season => season.seasonTitle === this.selectedSeason
         );
        const matchesName =
          this.searchName.trim() === '' ||
          character.name.toLowerCase().includes(this.searchName.toLowerCase());
        return matchesSeason && matchesName;
      })
    );
  }
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
    this.filteredCharacters = this.paginate(
      this.characters.filter(character => {
        const matchesSeason =
          this.selectedSeason === 'All' ||character.seasons.some(
           season => season.seasonTitle === this.selectedSeason
         );
        const matchesName =
          this.searchName.trim() === '' ||
          character.name.toLowerCase().includes(this.searchName.toLowerCase());
        return matchesSeason && matchesName;
      })
    );
  }
}
}
