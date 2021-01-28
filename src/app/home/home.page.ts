import { RegisterForm } from './../model/RegisterForm';
import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BottomSheetData } from '../model/BottomSheetData';
import { LoginForm } from '../model/LoginForm';
import { TeacherRegisterComponent } from '../shared/teacher-register/teacher-register.component';
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
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
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
    /* this.bottomSheet.open(TeacherLoginComponent)
      .afterDismissed().subscribe((result: BottomSheetData<LoginForm>) => {
        if (result.status === 'login') {
          this.teacherLogin(result.data);
          this.router.navigate(['teacher-portal']);
        } else if (result.status === 'register') {
          this.teacherRegistrationForm();
        } else if (result.status === 'back') {

        }
      }); */
      // TODO: Remove below line
      this.router.navigate(['teacher-portal']);
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

  teacherRegistrationForm = () => {
    this.bottomSheet.open(TeacherRegisterComponent)
      .afterDismissed().subscribe((result: BottomSheetData<RegisterForm>) => {
        if (result.status === 'signup') {
          this.teacherRegistration(result.data);
        } else if (result.status === 'back') {

        }
      });
  }

  teacherRegistration = (registerForm: RegisterForm) => {
    this.toastController.create({
      header: 'Registration',
      message: 'Your registration has been completed successfuly.',
      duration: 2000,
      position: 'top',
      color: 'success'
    }).then((toast) => {
      toast.present();
    });
  }

  teacherLogin = (loginForm: LoginForm) => {
    this.toastController.create({
      header: 'Login',
      message: 'Your login has been completed successfuly.',
      duration: 2000,
      position: 'top',
      color: 'success'
    }).then((toast) => {
      toast.present();
    });
  }
}
