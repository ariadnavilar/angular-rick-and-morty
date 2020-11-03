import { Component, OnInit } from '@angular/core';
import { CharactersService } from "../../shared/services/characters.service";

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {
  characters;
  actualPage = 1;
  paginationInfo;

  constructor(private charactersService: CharactersService) {
  }

  ngOnInit(): void {
    /*  this.getPage();
      this.getData(this.actualPage);
    }

    getPage() {
      this.actualPage = Number(this.activatedRoute.snapshot.paramMap.get('page'));
    }

    getData(actualPage) {
      this.location.replaceState(actualPage);
      */

      this.charactersService.getCharacters().subscribe((res: any) => {
        this.characters = res.results;
      });
    }
}
