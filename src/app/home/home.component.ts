import { Component, OnInit, HostListener } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from './home.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  people: Home[];
  constructor(private homeservice: HomeService) {
    }
  ngOnInit() {
    this.people = this.homeservice.getpeople();
  }

}
