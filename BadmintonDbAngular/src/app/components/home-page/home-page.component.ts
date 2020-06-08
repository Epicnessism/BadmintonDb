import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  daka;
  id: number = 2;

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.getPlayerInfo();
  }

  getPlayerInfo() {
    this.userDataService.getPlayerStats(this.id).subscribe( result => {
      console.log(result);
      this.daka = result;
    });
  }

}
