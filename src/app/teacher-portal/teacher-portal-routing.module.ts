import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherPortalPage } from './teacher-portal.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPortalPageRoutingModule {}
