import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HomeWork } from './../model/HomeWork';

const homeWorksInitData: Array<HomeWork> = [
  {
    id: 1,
    title: 'Solar System',
    description: 'description',
    date: new Date(),
    grade: 10,
    subject: 'Science'
  },
  {
    id: 2,
    title: 'Laplace Transform',
    description: 'description 1',
    date: new Date(),
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

  delete = (id: number) => {
    const newArray = [...this.homeWorks.value.filter(x => x.id !== id)];
    this.homeWorks.next([...newArray]);
  }

}
