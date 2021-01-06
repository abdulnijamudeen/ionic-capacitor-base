import { LoaderService } from './../../service/loader.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { AppService } from 'src/app/app.service';
import { TmdbService } from '../tmdb.service';

@Component({
  templateUrl: './trending-tvshows.page.html',
  styleUrls: ['./trending-tvshows.page.css']
})
export class TrendingTvshowsPage implements OnInit {

  segment: 'day' | 'week' = 'day';
  todayShows: any[] = [];
  weekShows: any[] = [];
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
        if (this.todayShows.length === 0){ this.getTrendingMovies(); }
      });
    }

    if (this.segment === 'week') {
      this.slider.slideTo(1).then(() => {
        if (this.weekShows.length === 0){ this.getTrendingMovies(); }
      });
    }

  }

  slideChanged() {
    this.slider.getActiveIndex().then(i => this.segment = i === 0 ? 'day' : 'week');
  }

  getTrendingMovies() {
    this.ionLoader.showLoader();
    if (this.segment === 'day') {
      this.tmdbService.getTrending('tv', this.segment)
      .subscribe(res => { this.todayShows = res.results; this.ionLoader.hideLoader(); },
      error => { console.log('error', error); });
    }
    if (this.segment === 'week') {
      this.tmdbService.getTrending('tv', this.segment)
      .subscribe(res => { this.weekShows = res.results;this.ionLoader.hideLoader(); },
      error => { console.log('error', error); });
    }
  }

}
