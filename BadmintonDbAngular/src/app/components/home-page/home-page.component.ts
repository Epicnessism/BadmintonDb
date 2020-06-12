import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  playerIdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  playerInfo = null; //TODO create player Object Model


  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {}

  searchPlayerId() {
    if(!this.playerIdFormControl.hasError('minlength') && !this.playerIdFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerIdFormControl.value).subscribe( result => {
        console.log(result);
        this.playerInfo = result.body;
      });
    }
  }

}
