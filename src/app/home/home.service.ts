import { Injectable } from '@angular/core';
import { Home } from './home.modal';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  people: Home[] = [
    // tslint:disable-next-line:max-line-length
    new Home('Su', 22, 'its strange that we all are strangers at one point', ['https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbc3b29b62775efc573115ee5f413905&auto=format&fit=crop&w=682&q=80' , 'secondone']),
    // tslint:disable-next-line:max-line-length
    new Home('Jincy', 23, 'When life gives you lemons make lemonaids', ['https://images.unsplash.com/photo-1509122043523-bc25fa2c1d6d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1a9f09f3a4c7f07ea30cc3f693b0e740&auto=format&fit=crop&w=634&q=80', 'secondone']),
    // tslint:disable-next-line:max-line-length
    new Home('Shimly', 24, 'Don\'t mess with me, you\'ll get burned ', ['https://images.unsplash.com/photo-1504884790557-80daa3a9e621?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f105fd4834aecbe56af935dfb8bec57e&auto=format&fit=crop&w=634&q=80', 'secondone']),
  ];
  constructor() {
   }

   getpeople() {
    return this.people.slice();
   }
}
