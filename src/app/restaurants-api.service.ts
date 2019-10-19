import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResults } from './results';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsApiService {

  baseUrl = '/api/search';

  // tslint:disable-next-line: variable-name
  private _restaurantProfile = new Subject<any>();
  public result$ = this._restaurantProfile.asObservable();
  resulttemp: any;

  // tslint:disable-next-line: variable-name
  constructor(private _httpClient: HttpClient) { }

  sendRestaurantProfile(profile: any) {
    this.resulttemp = profile;
    console.log('Service Restaurant prof:  ' + profile.name);
    this._restaurantProfile.next(profile.name);
  }

  getResultsWithParams(lat: any, lng: any) {
    console.log(lat + ',' + lng);
    const params = new HttpParams().append('location', lat + ',' + lng);
    return this._httpClient.get<any>(this.baseUrl, {params});
  }
}
