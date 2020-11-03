import {Component, Input, OnInit} from '@angular/core';
import { FavoritesService } from "../../services/local/favorites.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() items;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit(): void {
  }

  addFavorite(character){
    this.favoritesService.addNewFavorite(character)
  }

  deleteFavorite(character) {
    this.favoritesService.deleteAddedFavorite(character)
  }

}
