import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchResults } from './results';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsApiService {

  baseUrl = 'http://localhost:3000/api/search';

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

  getResultsWithParams(idparams: any) {
    const params = new HttpParams().append('name', idparams);
    return this._httpClient.get<any>(this.baseUrl, {params});
  }
}
