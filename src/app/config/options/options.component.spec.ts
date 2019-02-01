import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { OptionsComponent } from './options.component'

describe('OptionsComponent', () => {
  let component: OptionsComponent
  let fixture: ComponentFixture<OptionsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
