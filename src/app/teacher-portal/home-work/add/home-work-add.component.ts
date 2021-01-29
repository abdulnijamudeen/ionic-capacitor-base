import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
    date: new Date().toISOString(),
    grade: 1,
    subject: ''
  } as HomeWork;

  @ViewChild('form') form: NgForm;

  constructor(
    private homeWorkService: HomeWorkService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(params => {
      const id = Number(params.id);
      if (id) {
        this.homeWorkForm = this.homeWorkService.getById(id);
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    if (this.form.valid){
      this.save();
    }
  }

  onSaveClick = () => {
    if (this.form.valid){
      this.save();
    }
  }

  save = () => {
    if (this.homeWorkForm.id === 0) {
      this.homeWorkForm.id = new Date().getTime();
    }
    this.homeWorkService.update(this.homeWorkForm);
    this.backClicked();
  }

  backClicked = () => this.location.back();

}
