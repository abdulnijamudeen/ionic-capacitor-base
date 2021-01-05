import { Component, OnInit } from '@angular/core';
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

  constructor(private tmdbService: TmdbService, private appService: AppService) { }

  ngOnInit(): void {
    const config = this.appService.tmdbConfig;
    this.imgUrl = config.images.secure_base_url;
    this.imgSize = config.images.still_sizes[1];

    this.getTrendingMovies('day');
  }

  segmentChanged(ev: any) {
    if (this.segment === 'day' && this.todayShows.length === 0) {
      this.getTrendingMovies(this.segment);
    }

    if (this.segment === 'week' && this.weekShows.length === 0) {
      this.getTrendingMovies(this.segment);
    }

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
