import { LoaderService } from './../../service/loader.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { TmdbService } from '../tmdb.service';

@Component({
  templateUrl: './trending-movies.page.html',
  styleUrls: ['./trending-movies.page.css']
})
export class TrendingMoviesPage implements OnInit {

  segment: 'day' | 'week' = 'day';
  todayMovies: any[] = [];
  weekMovies: any[] = [];
  imgUrl = '';
  imgSize = '';

  @ViewChild('slides', { static: true }) slider: IonSlides;

  constructor(private tmdbService: TmdbService, private appService: AppService, private ionLoader: LoaderService) { }

  ngOnInit(): void {
    const config = this.appService.tmdbConfig;
    this.imgUrl = config.images.secure_base_url;
    this.imgSize = config.images.still_sizes[1];

    this.segment = 'day';
    this.getTrendingMovies();
  }

  segmentChanged(ev: any) {
    if (this.segment === 'day') {
      this.slider.slideTo(0).then(() => {
        if (this.todayMovies.length === 0){ this.getTrendingMovies(); }
      });
    }

    if (this.segment === 'week') {
      this.slider.slideTo(1).then(() => {
        if (this.weekMovies.length === 0){ this.getTrendingMovies(); }
      });
    }

  }

  slideChanged() {
    this.slider.getActiveIndex().then(i => this.segment = i === 0 ? 'day' : 'week');
  }

  getTrendingMovies() {
    this.ionLoader.showLoader();
    if (this.segment === 'day') {
      this.tmdbService.getTrending('movie', this.segment)
      .subscribe(res => { this.todayMovies = res.results; this.ionLoader.hideLoader(); },
        error => { console.log('error', error); });
    }
    if (this.segment === 'week') {
      this.tmdbService.getTrending('movie', this.segment)
      .subscribe(res => { this.weekMovies = res.results; this.ionLoader.hideLoader(); },
      error => { console.log('error', error); });
    }
  }

}
