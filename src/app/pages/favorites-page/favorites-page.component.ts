import { Component, OnInit } from '@angular/core';
import {FavoritesService} from '../../shared/services/local/favorites.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  favorites;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

}
