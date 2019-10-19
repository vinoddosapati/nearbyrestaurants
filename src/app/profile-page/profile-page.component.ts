import { Component, OnInit } from '@angular/core';
import { RestaurantsApiService } from '../restaurants-api.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  result: any;
  // tslint:disable-next-line: variable-name
  constructor(private _restaurantApi: RestaurantsApiService) { }

  ngOnInit() {
    console.log('Enter' + this._restaurantApi.resulttemp.name);
    this.result = this._restaurantApi.resulttemp;
    // this._restaurantApi.result$.subscribe(profile => {
    //   console.log('ProfilePageData: ' + profile);
    //   this.result = profile;
    // });
    // console.log('exit result: ' + this.result);
  }
}
