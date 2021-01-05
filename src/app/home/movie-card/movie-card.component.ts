import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movies: any[];
  @Input() imgUrl: string;
  @Input() imgSize: string;

  constructor() { }

  ngOnInit(): void {
  }

}
