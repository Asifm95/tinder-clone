import { Injectable } from '@angular/core';
import { Home } from './home.modal';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  people: Home[] = [
    new Home('asif', 22, 'good boi', ['firstone' , 'secondone']),
    new Home('erik', 22, 'good boi', ['firstone', 'secondone']),
    new Home('ashin', 22, 'good boi', ['firstone', 'secondone']),
  ];
  constructor() {
   }

   logpeople() {
    console.log(this.people);
   }
}
