import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FindAPlayerComponent } from './components/find-aplayer/find-aplayer.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'findAPlayer', component: FindAPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
