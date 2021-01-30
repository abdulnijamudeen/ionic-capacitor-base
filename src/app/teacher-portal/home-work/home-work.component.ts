import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonItemSliding } from '@ionic/angular';
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

  @ViewChild('slidingItem') slidingItem: IonItemSliding;

  constructor(
    private homeWorkService: HomeWorkService,
    public alertController: AlertController,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.homeWorks$ = this.homeWorkService.homeWorks;
  }

  ngOnInit(): void {
  }

  onDeleteClick = (homeWork: HomeWork) => {
    this.closeAllOpenSliding();
    this.alertController.create({
      header: 'Are you sure..?',
      message: 'Do you wish to delete.',
      buttons: [
        {
          text: 'Yes',
          handler: () => { this.homeWorkService.delete(homeWork.id); }
        },
        {
          text: 'No',
          handler: () => { }
        }
      ]
    }).then((res) => {
      res.present();
    });

  }

  onEditClick = (homeWork: HomeWork) => {
    this.closeAllOpenSliding();
    this.router.navigate(['../', 'home-work-add'], {
      relativeTo: this.route,
      queryParams: {
        id: homeWork.id
      }
    });
  }

  closeAllOpenSliding = () => this.slidingItem.closeOpened();

}
