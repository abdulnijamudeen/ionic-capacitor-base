import { Component, OnInit } from '@angular/core';
import { HomeWork } from 'src/app/model/HomeWork';
import { HomeWorkService } from 'src/app/service/home-work.service';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {

  homeWorks: Array<HomeWork> = [];

  constructor(private homeWorkService: HomeWorkService) {
    this.homeWorks = this.homeWorkService.getAll();
  }

  ngOnInit(): void {
  }

}
