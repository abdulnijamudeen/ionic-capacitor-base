import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeWorkComponent } from './home-work/home-work.component';

import { TeacherPortalPage } from './teacher-portal.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPortalPage
  },
  {
    path: 'home-work',
    component: HomeWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPortalPageRoutingModule {}
