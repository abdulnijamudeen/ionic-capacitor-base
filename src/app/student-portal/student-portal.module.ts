import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPortalPageRoutingModule } from './student-portal-routing.module';

import { StudentPortalPage } from './student-portal.page';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentHomeWorkComponent } from './student-home-work/student-home-work.component';
import { HomeWorkViewComponent } from './student-home-work/home-work-view/home-work-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPortalPageRoutingModule,
    MaterialUiModule
  ],
  declarations: [
    StudentPortalPage,
    StudentDashboardComponent,
    StudentHomeWorkComponent,
    HomeWorkViewComponent
  ]
})
export class StudentPortalPageModule {}
