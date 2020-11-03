import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites = [];

  constructor() { }

  addNewFavorite(newFavorite) {
    const isAdded = !!this.favorites.find(el => el.id === newFavorite.id && el.name === newFavorite.name);
    if(!isAdded) {
      this.favorites.push(newFavorite);
    }
  }

  deleteAddedFavorite(i) {
    this.favorites.splice(i, 1);
  }

  getFavorites() {
    return this.favorites;
  }

}
