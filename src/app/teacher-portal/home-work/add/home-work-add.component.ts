import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HomeWork } from 'src/app/model/HomeWork';
import { HomeWorkService } from 'src/app/service/home-work.service';

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

  constructor(
    private homeWorkService: HomeWorkService,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onSaveClick = () => {
    if (this.homeWorkForm.id === 0) {
      this.homeWorkForm.id = new Date().getTime();
    }
    this.homeWorkService.update(this.homeWorkForm);
    this.backClicked();
  }

  backClicked = () => this.location.back();

}
