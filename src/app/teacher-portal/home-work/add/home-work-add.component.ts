import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeWork } from 'src/app/model/HomeWork';
import { HomeWorkService } from 'src/app/service/home-work.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-home-work-add',
  templateUrl: './home-work-add.component.html',
  styleUrls: ['./home-work-add.component.css']
})
export class HomeWorkAddComponent implements OnInit {

  homeWorkForm: HomeWork = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    grade: 1,
    subject: ''
  } as HomeWork;

  homeWorks: Array<HomeWork> = [];

  constructor(
    private homeWorkService: HomeWorkService,
    private location: Location
    ) {
    this.homeWorkService.homeWorks.subscribe((data) => { this.homeWorks = data; });
  }

  ngOnInit(): void {
  }

  onSaveClick = () => {
    this.homeWorkForm.id = new Date().getTime();
    this.homeWorks = [...this.homeWorks, this.homeWorkForm];
    this.homeWorkService.update(this.homeWorks);
    this.backClicked();
  }

  backClicked = () => this.location.back();

}
