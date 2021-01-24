import { TeacherLoginComponent } from './../shared/teacher-login/teacher-login.component';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Plugins } from '@capacitor/core';
import { AlertController } from '@ionic/angular';
const { App } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertController: AlertController, private bottomSheet: MatBottomSheet) { }

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
      .afterDismissed().subscribe((loginForm) => {
        // console.log(loginForm);
      });
  }

  onSchoolPortalClick() {
    this.bottomSheet.open(TeacherLoginComponent)
      .afterDismissed().subscribe((loginForm) => {
        // console.log(loginForm);
      });
  }
}
