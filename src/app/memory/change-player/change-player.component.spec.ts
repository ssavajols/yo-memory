import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePlayerComponent } from './change-player.component';

describe('ChangePlayerComponent', () => {
  let component: ChangePlayerComponent;
  let fixture: ComponentFixture<ChangePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
