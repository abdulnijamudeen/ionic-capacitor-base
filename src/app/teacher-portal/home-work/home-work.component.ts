import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {
  today = Date.now();
  constructor() { }

  ngOnInit(): void {
  }

}
