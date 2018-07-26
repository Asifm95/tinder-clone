import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { MessagesComponent } from '../messages/messages.component';
import { ProfileEditComponent } from '../profile/profile-edit/profile-edit.component';
import { ProfileSettingsComponent } from '../profile/profile-settings/profile-settings.component';
import { DetailsComponent } from '../home/details/details.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/details', component: DetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'profile/edit', component: ProfileEditComponent},
  {path: 'profile/settings', component: ProfileSettingsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutesModule { }
