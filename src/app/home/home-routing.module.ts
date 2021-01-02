import { TrendingTvshowsPage } from './trending-tvshows/trending-tvshows.page';
import { TrendingMoviesPage } from './trending-movies/trending-movies.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'trending-movies',
        component: TrendingMoviesPage
      },
      {
        path: 'trending-tvshows',
        component: TrendingTvshowsPage
      },
      {
        path: '',
        redirectTo: 'trending-movies',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
