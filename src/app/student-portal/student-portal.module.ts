import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentPortalPageRoutingModule } from './student-portal-routing.module';

import { StudentPortalPage } from './student-portal.page';
import { MaterialUiModule } from '../shared/material-ui/material-ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentPortalPageRoutingModule,
    MaterialUiModule
  ],
  declarations: [StudentPortalPage]
})
export class StudentPortalPageModule {}
