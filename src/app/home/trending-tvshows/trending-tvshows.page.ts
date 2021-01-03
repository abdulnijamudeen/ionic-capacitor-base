import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  templateUrl: './trending-tvshows.page.html',
  styleUrls: ['./trending-tvshows.page.css']
})
export class TrendingTvshowsPage implements OnInit {

  segment: 'today' | 'week' = 'today';
  todayShows: any[] = [];
  weekShows: any[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.getTrendingMovies('today');
  }

  segmentChanged(ev: any) {
    if (this.segment === 'today' && this.todayShows.length === 0) {
      this.getTrendingMovies(this.segment);
    }

    if (this.segment === 'week' && this.weekShows.length === 0) {
      this.getTrendingMovies(this.segment);
    }

  }

  getTrendingMovies(time: string) {
    this.tmdbService.getTrending('tv', time).subscribe(res => {
      if (time === 'today') {
        this.todayShows = res.results;
      }
      if (time === 'week') {
        this.weekShows = res.results;
      }
    });
  }

}
