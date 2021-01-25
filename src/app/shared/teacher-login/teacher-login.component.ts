import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Platform } from '@ionic/angular';

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
        this.bottomSheetRef.dismiss();
      });
    }

  ngOnInit(): void {
  }

  onLoginClick() {
    this.bottomSheetRef.dismiss(this.loginForm);
  }

}

interface LoginForm {
  mobile: string;
  password: string;
}
