import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TmdbService {

  trendingUrl = 'assets/trending.json';

  constructor(private http: HttpClient) { }

  getTrending(mediaType: string, time: string) {
    const params = this.setApiKey(new HttpParams());
    // return this.http.get<any>(this.trendingUrl);
    return this.http.get<any>(`${environment.apiUrl}/trending/${mediaType}/${time}`, { params });
  }

  private setApiKey = (params: HttpParams): HttpParams => params.set('api_key', environment.apiKey);

}
