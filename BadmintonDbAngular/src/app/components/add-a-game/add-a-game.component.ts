import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

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


  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.secondFormGroup = this._formBuilder.group({
      gameType: ['', Validators.required],
      player_1A: ['', Validators.required],
      player_1B: ['', Validators.required],
      player_2A: ['', Validators.required],
      player_2B: ['', Validators.required],
      points_A: ['', Validators.required],
      points_B: ['', Validators.required],
      set_id: ['', Validators.required],
    });
  }

  isWork(): void {
    console.log(this.secondFormGroup.value);

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
    console.log(this.completed1, "completed1");

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
    this.stepper.selected.completed = true;
    this.completed4 = true;
    this.state = 'done';
    console.log(this.secondFormGroup.valid);
  }

}
