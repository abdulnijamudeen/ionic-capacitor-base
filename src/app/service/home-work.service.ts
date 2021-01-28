import { HomeWork } from './../model/HomeWork';
import { Injectable } from '@angular/core';

let homeWorks: Array<HomeWork> = [
  {
    id: 1,
    title: 'Solar System',
    description: 'description',
    date: new Date,
    grade: 10,
    subject: 'Science'
  },
  {
    id: 2,
    title: 'Laplace Transform',
    description: 'description 1',
    date: new Date,
    grade: 8,
    subject: 'Maths'
  }
];

@Injectable({
  providedIn: 'root'
})
export class HomeWorkService {

  constructor() { }

  getAll = () : Array<HomeWork> => homeWorks
}
