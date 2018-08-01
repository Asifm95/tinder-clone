import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profiles } from './profile.modal';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profiles;
  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.profile ;
    console.log(this.profile);
  }

}
