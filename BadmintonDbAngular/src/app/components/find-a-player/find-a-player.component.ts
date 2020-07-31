import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-find-a-player',
  templateUrl: './find-a-player.component.html',
  styleUrls: ['./find-a-player.component.sass']
})
export class FindAPlayerComponent implements OnInit {

  players;
  filteredPlayers: Observable<any>;

  playerIdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6), //TODO not used atm...bring back when implementing playerID
  ]);

  playerNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  playerInfo = null; //TODO create player Object Model

  constructor(
    private userDataService: UserDataService,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit(): void {
    this.subscriptionService.sendLoginRedirect('findAPlayer');
    this.userDataService.getPlayerNames('all').subscribe( result => {
      console.log(result);
      this.players = result;
      this.filteredPlayers = this.playerNameFormControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.players.slice())
      );
    });

  }

  private _filter(value): string[] {
    console.log(value);

    const filterValue = value.toLowerCase();

    return this.players.filter(option => option.given_name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(player): string {
    console.log(player);
    return player && player.given_name ? `${player.given_name} ${player.family_name}` : '';
  }

  searchPlayerId() {
    if (!this.playerIdFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerIdFormControl.value).subscribe(result => {
        console.log(result);
        this.playerInfo = result;
      });
    }
  }

  searchPlayerName() {
    if (!this.playerNameFormControl.hasError('minlength') && !this.playerNameFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerNameFormControl.value).subscribe(result => {
        console.log(result);
        this.playerInfo = result;
      });
    }
  }
}
