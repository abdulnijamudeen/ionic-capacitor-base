import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private tmdbConfigSubject: BehaviorSubject<any>;
  configUrl = 'assets/tmdbconfig.json';

  constructor(private http: HttpClient) {
    this.tmdbConfigSubject = new BehaviorSubject<any>({});
  }

  getTmdbConfig() {
    this.http.get<any>(this.configUrl).subscribe(res => this.tmdbConfigSubject.next(res));
  }

  public get tmdbConfig(): any {
    return this.tmdbConfigSubject.value;
  }

}
