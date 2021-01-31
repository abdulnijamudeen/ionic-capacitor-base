import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeWork } from 'src/app/model/HomeWork';
import { HomeWorkService } from 'src/app/service/home-work.service';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home-work-view',
  templateUrl: './home-work-view.component.html',
  styleUrls: ['./home-work-view.component.css']
})
export class HomeWorkViewComponent implements OnInit {

  id: number;
  homeWork: HomeWork;

  constructor(
    private route: ActivatedRoute,
    private homeWorkService: HomeWorkService,
    private clipboard: Clipboard,
    public toastController: ToastController
  ) {
    this.route.queryParams.subscribe(params => {
      const id = Number(params.id);
      if (id) { this.id = id; this.getHomeWorkById(this.id); }
    });
  }

  ngOnInit(): void {
  }

  getHomeWorkById = (id: number) => {
    this.homeWork = this.homeWorkService.getById(id);
  }

  onCopyClick = () => 
  this.clipboard.copy(`${this.homeWork.title} (${this.homeWork.subject}) - ${this.homeWork.description}`).then((data) => {
    this.toastController.create({
      header: 'Copy',
      message: 'Lesson has been copied successfuly.',
      duration: 2000,
      position: 'top',
      color: 'success'
    }).then((toast) => {
      toast.present();
    });
  });

}
