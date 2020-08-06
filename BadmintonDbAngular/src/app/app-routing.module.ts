import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FindAPlayerComponent } from './components/find-a-player/find-a-player.component';
import { AddAGameComponent } from './components/add-a-game/add-a-game.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'findAPlayer', component: FindAPlayerComponent},
  {path: 'addAGame', component: AddAGameComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'profilePage', component: ProfilePageComponent},
  {path: 'notifications', component: NotificationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
