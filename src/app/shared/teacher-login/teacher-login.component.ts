import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-teacher-login',
  templateUrl: './teacher-login.component.html',
  styleUrls: ['./teacher-login.component.css']
})
export class TeacherLoginComponent implements OnInit {

  loginForm: LoginForm = {} as LoginForm;

  constructor(private bottomSheetRef: MatBottomSheetRef<TeacherLoginComponent>) { }

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
