import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponent } from './options.component';
import { FormsModule } from '@angular/forms';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
