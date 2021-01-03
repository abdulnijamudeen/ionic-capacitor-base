import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { TmdbService } from '../tmdb.service';

@Component({
  templateUrl: './trending-movies.page.html',
  styleUrls: ['./trending-movies.page.css']
})
export class TrendingMoviesPage implements OnInit {

  segment: 'today' | 'week' = 'today';
  todayMovies: any[] = [];
  weekMovies: any[] = [];
  imgUrl = '';
  imgSize = '';

  constructor(private tmdbService: TmdbService, private appService: AppService) { }

  ngOnInit(): void {
    const config = this.appService.tmdbConfig;
    this.imgUrl = config.images.secure_base_url;
    this.imgSize = config.images.still_sizes[0];

    this.getTrendingMovies('today');
  }

  segmentChanged(ev: any) {
    if (this.segment === 'today' && this.todayMovies.length === 0) {
      this.getTrendingMovies(this.segment);
    }

    if (this.segment === 'week' && this.weekMovies.length === 0) {
      this.getTrendingMovies(this.segment);
    }

  }

  getTrendingMovies(time: string) {
    this.tmdbService.getTrending('movie', time).subscribe(res => {
      if (time === 'today') {
        this.todayMovies = res.results;
      }
      if (time === 'week') {
        this.weekMovies = res.results;
      }
    });
  }

}
