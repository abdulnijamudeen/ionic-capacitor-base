import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-teacher-portal',
  templateUrl: './teacher-portal.page.html',
  styleUrls: ['./teacher-portal.page.scss'],
})
export class TeacherPortalPage implements OnInit {

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
