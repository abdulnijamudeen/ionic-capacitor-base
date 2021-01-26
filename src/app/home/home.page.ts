import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController, Platform } from '@ionic/angular';
import { TeacherLoginComponent } from './../shared/teacher-login/teacher-login.component';
const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public alertController: AlertController,
    private bottomSheet: MatBottomSheet,
    public router: Router,
    private platform: Platform
  ) {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      this.onExitClick();
    });
  }

  onExitClick() {
    this.alertController.create({
      header: 'Are you sure..?',
      message: 'Do you wish to exit.',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            App.exitApp();
          }
        },
        {
          text: 'No',
          handler: () => {
            // console.log('I care about humanity');
          }
        }
      ]
    }).then((res) => {
      res.present();
    });

  }

  onTeacherPortalClick() {
    this.bottomSheet.open(TeacherLoginComponent)
      .afterDismissed().subscribe((data) => {
        if(data.status === 'login'){
          // console.log(data.loginForm);
          this.router.navigate(['teacher-portal']);
        } else if(data.status === 'register'){
          // call register form
        } else if (data.status === 'back'){

        }
      });
  }

  onSchoolPortalClick() {
    this.alertController.create({
      header: 'Coming Soon!',
      message: 'School Portal feature is under beta testing...',
      buttons: ['Okay']
    }).then((res) => {
      res.present();
    });
  }

  onStudentPortalClick() {
    this.router.navigate(['student-portal']);
  }
}
