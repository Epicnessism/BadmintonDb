import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FindAPlayerComponent } from './components/find-a-player/find-a-player.component';
import { AddAGameComponent } from './components/add-a-game/add-a-game.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'findAPlayer', component: FindAPlayerComponent},
  {path: 'addAGame', component: AddAGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
