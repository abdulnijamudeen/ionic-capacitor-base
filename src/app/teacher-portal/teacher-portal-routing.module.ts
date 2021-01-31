import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeWorkAddComponent } from './home-work/add/home-work-add.component';
import { HomeWorkComponent } from './home-work/home-work.component';
import { HomeWorkViewComponent } from './home-work/view/home-work-view.component';
import { TeacherPortalPage } from './teacher-portal.page';


const routes: Routes = [
  {
    path: '',
    component: TeacherPortalPage
  },
  {
    path: 'home-work',
    component: HomeWorkComponent
  },
  {
    path: 'home-work-add',
    component: HomeWorkAddComponent
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
export class TeacherPortalPageRoutingModule {}
