import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './trending-tvshows.page.html',
  styleUrls: ['./trending-tvshows.page.css']
})
export class TrendingTvshowsPage implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
