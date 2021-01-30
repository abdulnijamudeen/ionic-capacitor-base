import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  grade: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.queryParams.subscribe(params => {
      const grade = Number(params.grade);
      if (grade) { this.grade = grade; }
    });
  }

  ngOnInit(): void {
  }

  onHomeWorkClick = () => { this.router.navigate(['../', 'home-work'], { queryParams: { grade: this.grade }, relativeTo: this.route }); };

}
