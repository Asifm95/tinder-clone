import { Component, OnInit, HostListener } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  innerWidth: any;
  @HostListener('window:resize') onResize() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }
  constructor(private homeservice: HomeService) {

    }
  ngOnInit() {
  }

}
