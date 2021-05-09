import { Component, OnInit } from '@angular/core';
import { CreateVehicle } from '../logic/createvehicle';
import { GeolocationService } from '../geolocation.service';
import { TastingRating } from '../logic/tastingRating';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {
  routeringPages: any;
  tastingEnabled = false;
  createvehicle: CreateVehicle;
  types = ['Brustino', 'Nigerianno', 'Americano', 'Mexicanno', 'Icelanno'];
  constructor(private geolocation: GeolocationService,
    private router: Router, private data: DataService, private activated: ActivatedRoute) { }


  tastingRatingChanged(checked: boolean) {
    if (checked) {
      this.createvehicle.tastingRating = new TastingRating();
    } else {
      this.createvehicle.tastingRating = null;
    }
  }
  cancel() {
    this.router.navigate(['/']);

  }
  save() {
    this.data.save(this.createvehicle, result => {
      if (result) {
        this.router.navigate(['/']);
      }
    });
  }
  ngOnInit() {
    this.createvehicle = new CreateVehicle();
    this.routeringPages = this.activated.params.subscribe(params => {
      console.log(params['id']);
      if (params['id']) {
        this.data.get(params['id'], response => {
          this.createvehicle = response;
          if (this.createvehicle.tastingRating) {
            this.tastingEnabled = true;
          }
        });
      }
    });


    this.geolocation.requestLocation(location => {
      if (location) {
        this.createvehicle.location.latitude = location.latitude;
        this.createvehicle.location.longitude = location.longitude;
      }
    });
  }

}
