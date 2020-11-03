import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LocationsPageComponent} from "./pages/locations-page/locations-page.component";
import { CharactersPageComponent} from "./pages/characters-page/characters-page.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MenuComponent} from "./shared/components/menu/menu.component";
import {GalleryComponent} from "./shared/components/gallery/gallery.component";
import {RouterModule} from "@angular/router";
import { DetailPageComponent } from './pages/characters-page/pages/detail-page/detail-page.component';

@NgModule({
  declarations: [AppComponent, CharactersPageComponent, LocationsPageComponent, FavoritesPageComponent, MenuComponent, GalleryComponent, DetailPageComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
