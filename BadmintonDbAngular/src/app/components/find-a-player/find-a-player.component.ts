import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/services/user-data.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

export interface User {
  id: number;
  given_name: string;
  family_name: string;
}

@Component({
  selector: 'app-find-a-player',
  templateUrl: './find-a-player.component.html',
  styleUrls: ['./find-a-player.component.sass']
})
export class FindAPlayerComponent implements OnInit {

  mode: ProgressSpinnerMode = 'indeterminate';
  searchingInProgress: boolean = false;

  players: User[] = [
    { id: 1, given_name: 'aaa', family_name: 'dddd' },
    { id: 2, given_name: 'ggg', family_name: 'walzer' },
    { id: 3, given_name: 'bbadf', family_name: 'xu' },
  ]
  filteredPlayers: Observable<User[]>;

  playerIdFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6), //TODO not used atm...bring back when implementing playerID
  ]);

  playerNameFormControl = new FormControl('', []);

  playerInfo = null; //TODO create player Object Model

  constructor(
    private userDataService: UserDataService,
    private subscriptionService: SubscriptionService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.subscriptionService.sendLoginRedirect('findAPlayer');
    this.userDataService.getPlayerNames('all').subscribe(result => {
      console.log(result);
      this.players = result;
      this.filteredPlayers = this.playerNameFormControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.players.slice())
      );
    });


  }

  private _filter(value: string): User[] {
    console.log(value);

    const filterValue = value.toLowerCase();

    return this.players.filter(option => option.given_name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(player: User): string {
    console.log(player);
    return player && player.given_name ? `${player.given_name} ${player.family_name}` : '';
  }

  searchPlayerId() {
    console.log(this.searchingInProgress);
    if (!this.playerIdFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerIdFormControl.value).subscribe(result => {
        console.log(result);
        this.playerInfo = result;

      });
    }
  }

  searchPlayerName() {
    this.searchingInProgress = true;
    console.log(this.playerNameFormControl.value.id);

    if (!this.playerNameFormControl.hasError('minlength') && !this.playerNameFormControl.hasError('required')) {
      this.userDataService.getPlayerStats(this.playerNameFormControl.value.id).subscribe(result => {
        console.log(result);
        this.playerInfo = result;
        this.searchingInProgress = false;
      });
    }
  }
}
