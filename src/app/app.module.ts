import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { GooglePlaceModule } from 'ngx-google-places-autocomplete';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/nav.bar.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { RestaurantsApiService } from './restaurants-api.service';
import { ProfilePageComponent } from './profile-page/profile-page.component';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DetailsComponent,
    SearchComponent,
    HeadermenuComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [RestaurantsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
