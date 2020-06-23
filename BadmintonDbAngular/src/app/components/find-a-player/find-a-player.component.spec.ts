import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAPlayerComponent } from './find-a-player.component';

describe('FindAPlayerComponent', () => {
  let component: FindAPlayerComponent;
  let fixture: ComponentFixture<FindAPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
