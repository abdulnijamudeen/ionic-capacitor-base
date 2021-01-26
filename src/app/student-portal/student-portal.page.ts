import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-student-portal',
  templateUrl: './student-portal.page.html',
  styleUrls: ['./student-portal.page.scss'],
})
export class StudentPortalPage implements OnInit {

  constructor(
    private location: Location,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.backClicked();
    });
  }

  ngOnInit() {
  }

  backClicked = () => this.location.back();

}
