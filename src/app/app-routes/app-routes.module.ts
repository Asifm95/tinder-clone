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
  {path: 'home', component: HomeComponent, data: {depth: 1 }},
  { path: 'home/details', component: DetailsComponent, data: { depth: 4 }},
  { path: 'profile', component: ProfileComponent, data: { depth: 3 }},
  { path: 'messages', component: MessagesComponent, data: { depth: 2 }},
  { path: 'profile/edit', component: ProfileEditComponent, data: { depth: 5 }},
  { path: 'profile/settings', component: ProfileSettingsComponent, data: { depth: 6 }}
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
