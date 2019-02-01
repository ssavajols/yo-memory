import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PauseComponent } from './pause.component'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'

describe('PauseComponent', () => {
  let component: PauseComponent
  let fixture: ComponentFixture<PauseComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PauseComponent],
      imports: [RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PauseComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
