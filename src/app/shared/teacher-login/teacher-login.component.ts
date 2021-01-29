import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Platform } from '@ionic/angular';
import { BottomSheetData } from 'src/app/model/BottomSheetData';
import { LoginForm } from 'src/app/model/LoginForm';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  loginForm: LoginForm = {} as LoginForm;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<TeacherLoginComponent>,
    private platform: Platform
    ) {
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.bottomSheetRef.dismiss({
          status: 'back',
        } as BottomSheetData<LoginForm>);
      });
    }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.bottomSheetRef.dismiss( {
      status: 'login',
      data: this.loginForm
    } as BottomSheetData<LoginForm>);
  }

  onRegisterClick() {
    this.bottomSheetRef.dismiss( {
      status: 'register'
    } as BottomSheetData<LoginForm>);
  }

}
