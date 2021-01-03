import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TmdbService {

  trendingUrl = 'assets/trending.json';

  constructor(private http: HttpClient) { }

  getTrending(mediaType: string, time: string) {
    return this.http.get<any>(this.trendingUrl);
  }

}
