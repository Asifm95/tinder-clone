import { Component, OnInit, ViewChild, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Profiles } from '../profile.modal';
import { ProfileService } from '../profile.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})

// @HostBinding: { '[@fadeInAnimation]': '' };

export class ProfileEditComponent implements OnInit {
  @ViewChild('form') profileForm: NgForm;
  profile: Profiles;
  constructor(private profileservice: ProfileService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.profile = this.profileservice.profile;
  }

  saveData(data: NgForm) {
    console.log(data);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
