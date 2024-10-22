import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  characterList: Character [] = [];
  name: string ="";
  status: string= "";
  filteredCharacterList: Character [] = [];
  isLoading: boolean = true;

  constructor(
    private characterService: CharacterService,
  ){

  }

  filterText = '';

  filterCharacters() {
    const searchTerm = this.filterText.toLowerCase();
    this.filteredCharacterList = this.characterList.filter(character =>
      character.name.toLowerCase().includes(searchTerm)
    );
  }

  ngOnInit(){
    this.getListaPersonajes()
  }

  getListaPersonajes(){
    this.characterService.getAllCharacters().subscribe((response: any[]) =>{
      this.isLoading = false;
      this.characterList = response;
      this.filteredCharacterList = this.characterList; 

      response.forEach((element, index) => {
        if (this.filteredCharacterList[index]) {
          this.filteredCharacterList[index].locationName = element.location.name;
      }
        
      });


    });
  }



}
