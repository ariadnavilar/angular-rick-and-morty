import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private httpClient: HttpClient) { }

  getCharacters() {
    return this.httpClient.get(environment.url + 'character');
  }

  getDetail(characterId) {
    return this.httpClient.get(environment.url + 'character/' + characterId);
  }

  getCharactersFiltered(filter) {
    return this.httpClient.get(environment.url + 'character/?name' + filter)
  }
}
