import { Component, Input, Output, EventEmitter} from '@angular/core';
import { RestaurantsApiService } from '../restaurants-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() result: any;
  @Output() notify = new EventEmitter<any>();

  results: any;
  constructor(private resturantApi: RestaurantsApiService, private router: Router) { }

  // ngOnInit() {
  //   return this.resturantApi.getResults().subscribe(data => this.results = data);
  // }
  myaddress: any;
  options = {
    componentRestrictions : {}
  };

  onSelect(item: any) {
    this.result = item;
    console.log('resturant name: ' + this.result.id);
    this.resturantApi.sendRestaurantProfile(this.result);
    // this.router.navigate(['profile', item.id]);
  }

  fetchApiResults(lat: any, lng: any) {
    // tslint:disable-next-line: triple-equals
      return this.resturantApi.getResultsWithParams(lat, lng).subscribe(data => {
        // console.log(data);
        this.results = data.results;
      });
  }

  handleAddressChange(address: any) {
    this.myaddress = address;
    console.log(this.myaddress);
    console.log('Lat : ' + this.myaddress.geometry.location.lat());
    console.log('Long : ' + this.myaddress.geometry.location.lng());
    this.fetchApiResults(this.myaddress.geometry.location.lat(), this.myaddress.geometry.location.lng());
  }
}
