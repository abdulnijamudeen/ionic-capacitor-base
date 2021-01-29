import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeWork } from 'src/app/model/HomeWork';
import { HomeWorkService } from 'src/app/service/home-work.service';

@Component({
  selector: 'app-home-work',
  templateUrl: './home-work.component.html',
  styleUrls: ['./home-work.component.css']
})
export class HomeWorkComponent implements OnInit {

  homeWorks$: BehaviorSubject<HomeWork[]>;

  constructor(private homeWorkService: HomeWorkService) {
    this.homeWorks$ = this.homeWorkService.homeWorks;
  }

  ngOnInit(): void {
  }

}
