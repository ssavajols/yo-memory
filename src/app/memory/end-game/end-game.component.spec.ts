import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGameComponent } from './end-game.component';
import { FormsModule } from '@angular/forms';

describe('EndGameComponent', () => {
  let component: EndGameComponent;
  let fixture: ComponentFixture<EndGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EndGameComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
