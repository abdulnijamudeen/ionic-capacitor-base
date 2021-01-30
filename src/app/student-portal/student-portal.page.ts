import { Router, ActivatedRoute } from '@angular/router';
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
    private platform: Platform,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.backClicked();
    });
  }

  ngOnInit() {
  }

  onGradeClick = (grade: number) => { this.router.navigate(['dashboard'], { queryParams: { grade }, relativeTo: this.route }); };

  backClicked = () => this.location.back();

}
