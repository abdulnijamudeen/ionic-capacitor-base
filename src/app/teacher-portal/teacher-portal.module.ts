import { MaterialUiModule } from './../shared/material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherPortalPageRoutingModule } from './teacher-portal-routing.module';

import { TeacherPortalPage } from './teacher-portal.page';
import { HomeWorkComponent } from './home-work/home-work.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherPortalPageRoutingModule,
    MaterialUiModule
  ],
  declarations: [
    TeacherPortalPage,
    HomeWorkComponent
  ]
})
export class TeacherPortalPageModule { }
