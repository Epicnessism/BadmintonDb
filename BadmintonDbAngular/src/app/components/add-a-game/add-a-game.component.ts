import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { GamesDataService } from 'src/app/services/games-data.service';

@Component({
  selector: 'app-add-a-game',
  templateUrl: './add-a-game.component.html',
  styleUrls: ['./add-a-game.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAGameComponent implements OnInit {

  @ViewChild('stepper') stepper;

  gameType: String;
  gameTypes: String[] = ['Singles', 'Doubles']
  secondFormGroup: FormGroup;

  completed1: boolean = false;
  completed2: boolean = false;
  completed4: boolean = false;
  state: string;


  constructor(
    private _formBuilder: FormBuilder,
    private gamesDataService: GamesDataService,
  ) { }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      gameType: ['', Validators.required],
      player_1A: [undefined || '', Validators.required],
      player_2A: [undefined || '', Validators.required],
      player_1B: [undefined || '', Validators.required],
      player_2B: [undefined || '', Validators.required],
      points_A: [undefined || '', Validators.required],
      points_B: [undefined || '', Validators.required],
      set_id: [undefined || '', Validators.required],
    });
  }

  setCompleted1(e): void {
    this.gameType = e;
    this.stepper.selected.completed = true;
    this.completed1 = true;
    this.nextStep();
  }

  nextStep(): void {
    this.stepper.next();
  }

  newSet(): void {
    this.secondFormGroup.patchValue({
      set_id: null
    });
    this.stepper.selected.completed = true;
    this.completed2 = true;
    this.nextStep();
    this.nextStep();
  }

  oldSet(): void {
    this.stepper.selected.completed = true;
    this.completed2 = true;
    this.nextStep();
  }

  done() { //? not sure how much we need this. placeholder for now.
    if (this.secondFormGroup.controls['set_id'].value != null && isNaN(this.secondFormGroup.controls['set_id'].value)) {
      console.log("some error happened here");
    } else {

      // console.log(this.secondFormGroup.valid); //? what does this do again
    }
    console.log(this.secondFormGroup.value);
    this.stepper.selected.completed = true;
    this.completed4 = true;
    this.state = 'done';
    this.gamesDataService.insertGame(this.secondFormGroup.value).subscribe(result => {
      console.log(result);
      console.log("successful return from game insertion");
    })

  }

}
