import { Component, OnInit } from '@angular/core';
import { CharacterService } from './character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit{

  characterList: any [] = [];
  name: string ="";
  status: string= "";

  constructor(
    private characterService: CharacterService
  ){

  }

  ngOnInit(){
    this.getListaPersonajes()
  }

  getListaPersonajes(){
    this.characterService.getAllCharacters().subscribe((response: any) =>{
      this.characterList = response;

    });
  }



}
