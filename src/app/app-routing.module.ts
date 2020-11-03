import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CharactersPageComponent} from "./pages/characters-page/characters-page.component";
import {LocationsPageComponent} from "./pages/locations-page/locations-page.component";
import {FavoritesPageComponent} from "./pages/favorites-page/favorites-page.component";
import {DetailPageComponent} from "./pages/characters-page/pages/detail-page/detail-page.component";

const routes: Routes = [{
  path: '', component: HomePageComponent, pathMatch: 'full'
}, {
  path: 'characters', component: CharactersPageComponent
}, {
  path: 'locations', component: LocationsPageComponent
}, {
  path: 'favorite', component: FavoritesPageComponent
}, {
  path: 'characters/:characterId', component: DetailPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
