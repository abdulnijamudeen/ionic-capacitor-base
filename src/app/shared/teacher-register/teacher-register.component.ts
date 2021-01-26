import { RegisterForm } from './../../model/RegisterForm';
import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Platform } from '@ionic/angular';
import { BottomSheetData } from 'src/app/model/BottomSheetData';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.css']
})
export class TeacherRegisterComponent implements OnInit {

  registerForm: RegisterForm = {} as RegisterForm;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<TeacherRegisterComponent>,
    private platform: Platform
    ) { 
      this.platform.backButton.subscribeWithPriority(10, () => {
        this.bottomSheetRef.dismiss(<BottomSheetData<RegisterForm>>{
          status: 'back',
        });
      });
    }

  ngOnInit(): void {
  }

  onRegisterClick() {
    this.bottomSheetRef.dismiss(<BottomSheetData<RegisterForm>>{
      status: 'signup',
      data: this.registerForm
    });
  }

}
