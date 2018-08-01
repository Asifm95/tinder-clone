import { Injectable } from '@angular/core';
import { Profiles } from './profile.modal';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: Profiles = new Profiles('Asif', 22, 'Why do we fall?', 'Web developer', 'TKM college of engineering', 'Freelancer', 'male', [
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a0f994eef47e5fb1a67849703cc961b3&auto=format&fit=crop&w=1050&q=80',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4d3f3415561bc1b63cdc05b6501ba5d5&auto=format&fit=crop&w=1050&q=80',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1520975608515-79b7d99750e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=510beca99278b81b30ca92aa904508d5&auto=format&fit=crop&w=1050&q=80',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56c7f9756b4386446903856e0fc99dd5&auto=format&fit=crop&w=1050&q=80',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=56c7f9756b4386446903856e0fc99dd5&auto=format&fit=crop&w=1050&q=80',
    // tslint:disable-next-line:max-line-length
    'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f01588d10ff9d309abd7cf609fb7e265&auto=format&fit=crop&w=1052&q=80'
  ]);

 constructor() {

 }


}
