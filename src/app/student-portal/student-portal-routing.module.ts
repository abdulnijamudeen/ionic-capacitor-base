import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPortalPage } from './student-portal.page';
import { StudentHomeWorkComponent } from './student-home-work/student-home-work.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPortalPage
  },
  {
    path: 'dashboard',
    component: StudentDashboardComponent
  },
  {
    path: 'home-work',
    component: StudentHomeWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPortalPageRoutingModule {}
