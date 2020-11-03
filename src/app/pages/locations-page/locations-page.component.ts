import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../shared/services/locations.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

  locations;

  constructor(private LocationsService: LocationsService) { }

  ngOnInit(): void {
    this.LocationsService.getLocations().subscribe( (res:any) => {
      this.locations = res.results;
    });
  }
}
