import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeWork } from './../model/HomeWork';

const homeWorksInitData: Array<HomeWork> = [
  {
    id: 1,
    title: 'Solar System',
    description: 'description',
    date: new Date().toISOString(),
    grade: 10,
    subject: 'Science'
  },
  {
    id: 2,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 8,
    subject: 'Maths'
  }
];

@Injectable({
  providedIn: 'root'
})
export class HomeWorkService {

  public homeWorks: BehaviorSubject<HomeWork[]> = new BehaviorSubject<HomeWork[]>(homeWorksInitData);

  constructor() { }

  update(homeWork: HomeWork): void {
    if (this.homeWorks.value.some(x => x.id === homeWork.id)) {
      const newArray = [...this.homeWorks.value.filter(x => x.id !== homeWork.id), homeWork];
      this.homeWorks.next([...newArray]);
    } else {
      this.homeWorks.next([...this.homeWorks.value, homeWork]);
    }
  }

  delete = (id: number): void => {
    const newArray = [...this.homeWorks.value.filter(x => x.id !== id)];
    this.homeWorks.next([...newArray]);
  }

  getById = (id: number) => this.homeWorks.value.filter(x => x.id === id)[0];

}
