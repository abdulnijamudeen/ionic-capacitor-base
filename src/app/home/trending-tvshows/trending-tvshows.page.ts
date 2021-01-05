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

  constructor(private tmdbService: TmdbService, private appService: AppService) { }

  ngOnInit(): void {
    const config = this.appService.tmdbConfig;
    this.imgUrl = config.images.secure_base_url;
    this.imgSize = config.images.still_sizes[1];

    this.getTrendingMovies('day');
  }

  segmentChanged(ev: any) {
    if (this.segment === 'day') {
      this.slider.slideTo(0).then(() => {
        if (this.todayShows.length === 0){ this.getTrendingMovies(this.segment); }
      });
    }

    if (this.segment === 'week') {
      this.slider.slideTo(1).then(() => {
        if (this.weekShows.length === 0){ this.getTrendingMovies(this.segment); }
      });
    }

  }

  slideChanged() {
    this.slider.getActiveIndex().then(i => this.segment = i === 0 ? 'day' : 'week');
  }

  getTrendingMovies(time: string) {
    this.tmdbService.getTrending('tv', time).subscribe(res => {
      if (time === 'day') {
        this.todayShows = res.results;
      }
      if (time === 'week') {
        this.weekShows = res.results;
      }
    });
  }

}
