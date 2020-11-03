import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../../environments/environment'
import {ActivatedRoute} from '@angular/router';
import {CharactersService} from '../../../../shared/services/characters.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  character;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const characterId = params.get('characterId');
      this.charactersService.getDetail(characterId).subscribe(character => {
        this.character = character;
      })
    });
  }
}
