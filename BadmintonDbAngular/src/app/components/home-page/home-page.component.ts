import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import {FormControl, Validators} from '@angular/forms';
import { GamesDataService } from 'src/app/services/games-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  recentGamesData;

  constructor(
    private gamesDataService: GamesDataService
  ) { }

  ngOnInit(): void {
    this.getRecentGamesData();
  }

  getRecentGamesData(): void {
    this.gamesDataService.getRecentGames().subscribe( result => {
      console.log(result);
      this.recentGamesData = result;
    })
  }


}
