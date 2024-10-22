import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character/character.service';
import { CharacterInfo } from 'src/app/models/CharacterInfo';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  character!: CharacterInfo

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private characterService: CharacterService,

    ) 
  { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ??''; 
    this.characterService.getCharatcerById(id).subscribe(data => {
      this.character = data; 

      this.character.locationName= data.location.name;
    });
  }

  downloadPdf(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.characterService.downloadCharacterPdf(id).subscribe((blob: Blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${this.character.name}.pdf`;
        a.click();
        window.URL.revokeObjectURL(url);
      });
    }
  }

  goCharacterList() {
    this.router.navigate(['/characters']);
  }





}
