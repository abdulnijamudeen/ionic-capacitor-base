import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeWork } from 'src/app/model/HomeWork';
import { HomeWorkService } from 'src/app/service/home-work.service';

@Component({
  selector: 'app-student-home-work',
  templateUrl: './student-home-work.component.html',
  styleUrls: ['./student-home-work.component.css']
})
export class StudentHomeWorkComponent implements OnInit {

  grade: number;
  homeWorks$: Observable<HomeWork[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private homeWorkService: HomeWorkService,
  ) {
    this.route.queryParams.subscribe(params => {
      const grade = Number(params.grade);
      if (grade) { this.grade = grade; this.getHomeWorkByGrade(this.grade); }
    });
  }

  ngOnInit(): void {
  }

  getHomeWorkByGrade = (grade: number) => {
    this.homeWorks$ = this.homeWorkService.getByGrade(grade);
  }

  onHomeWorkClick = (homeWork: HomeWork) => {
    this.router.navigate(['../', 'home-work-view'], { relativeTo: this.route, queryParams: { id: homeWork.id } });
  }

}
