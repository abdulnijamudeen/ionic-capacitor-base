import { TrendingTvshowsPage } from './trending-tvshows/trending-tvshows.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TrendingMoviesPage } from './trending-movies/trending-movies.page';
import { TmdbService } from './tmdb.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movie-card/movie-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    HomePage,
    TrendingMoviesPage,
    TrendingTvshowsPage,
    MovieCardComponent
  ],
  providers: [
    TmdbService
  ]
})
export class HomePageModule {}
