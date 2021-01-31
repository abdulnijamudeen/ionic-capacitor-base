import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomeWork } from './../model/HomeWork';

const homeWorksInitData: Array<HomeWork> = [
  {
    id: 1,
    title: 'Solar System',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 1,
    subject: 'Science'
  },
  {
    id: 2,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 2,
    subject: 'Maths'
  },
  {
    id: 3,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 3,
    subject: 'Maths'
  },
  {
    id: 4,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 4,
    subject: 'Maths'
  },
  {
    id: 5,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 5,
    subject: 'Maths'
  },
  {
    id: 6,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 6,
    subject: 'Maths'
  },
  {
    id: 7,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 7,
    subject: 'Maths'
  },
  {
    id: 8,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 8,
    subject: 'Maths'
  },
  {
    id: 9,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 9,
    subject: 'Maths'
  },
  {
    id: 10,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 10,
    subject: 'Maths'
  },
  {
    id: 11,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 11,
    subject: 'Maths'
  },
  {
    id: 12,
    title: 'Laplace Transform',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in vestibulum ante, non malesuada elit. Aliquam pharetra nunc quis erat cursus convallis. Aliquam id tortor sapien. Aenean accumsan varius ante quis imperdiet. Nullam non lacus a turpis lobortis dictum. Suspendisse aliquet est ut maximus sodales. Integer laoreet eleifend metus ut.',
    date: new Date().toISOString(),
    grade: 12,
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

  getByGrade = (grade: number) => this.homeWorks.pipe(map(homeworks => homeworks.filter(x => x.grade === grade)));

}
