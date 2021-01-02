import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './trending-movies.page.html',
  styleUrls: ['./trending-movies.page.css']
})
export class TrendingMoviesPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
}
