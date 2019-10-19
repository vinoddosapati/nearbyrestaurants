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
  searchquery: any;
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

  fetchApiResults() {
    console.log(this.searchquery);
    // tslint:disable-next-line: triple-equals
    if (this.searchquery != undefined) {
      return this.resturantApi.getResultsWithParams(this.searchquery).subscribe(data => {
        // console.log(data);
        this.results = data.results;
      });
    }
  }

  handleAddressChange(address: any) {
    this.myaddress = address;
    console.log(this.myaddress);
  }
}
