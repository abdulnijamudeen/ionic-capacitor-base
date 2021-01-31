import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { HomeWorkViewComponent } from './student-home-work/home-work-view/home-work-view.component';
import { StudentHomeWorkComponent } from './student-home-work/student-home-work.component';
import { StudentPortalPage } from './student-portal.page';


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
  },
  {
    path: 'home-work-view',
    component: HomeWorkViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPortalPageRoutingModule { }
