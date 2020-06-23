import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAGameComponent } from './add-a-game.component';

describe('AddAGameComponent', () => {
  let component: AddAGameComponent;
  let fixture: ComponentFixture<AddAGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
