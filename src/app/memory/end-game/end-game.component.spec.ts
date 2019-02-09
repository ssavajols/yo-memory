import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { EndGameComponent } from './end-game.component'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

describe('EndGameComponent', () => {
  let component: EndGameComponent
  let fixture: ComponentFixture<EndGameComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EndGameComponent],
      imports: [FormsModule, RouterTestingModule, NoopAnimationsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGameComponent)
    component = fixture.componentInstance
    component._game.startGameTime = new Date(100)
    component._game.endGameTime = new Date(2001)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
