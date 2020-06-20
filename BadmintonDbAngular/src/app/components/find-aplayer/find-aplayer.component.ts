import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-find-aplayer',
  templateUrl: './find-aplayer.component.html',
  styleUrls: ['./find-aplayer.component.sass']
})
export class FindAPlayerComponent implements OnInit {

  playerIdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6), //TODO not used atm...bring back when implementing playerID
  ]);

  playerNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  playerInfo = null; //TODO create player Object Model

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
  }

  searchPlayerId() {
    if(!this.playerIdFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerIdFormControl.value).subscribe( result => {
        console.log(result);
        this.playerInfo = result;
      });
    }
  }

  searchPlayerName() {
    if(!this.playerNameFormControl.hasError('minlength') && !this.playerNameFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerNameFormControl.value).subscribe( result => {
        console.log(result);
        this.playerInfo = result;
      });
    }
  }
}
