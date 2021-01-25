import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentPortalPage } from './student-portal.page';

const routes: Routes = [
  {
    path: '',
    component: StudentPortalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentPortalPageRoutingModule {}
