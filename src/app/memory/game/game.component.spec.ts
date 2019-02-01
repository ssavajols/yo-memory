import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'

import { GameComponent } from './game.component'
import { Card } from '../../shared/classes/card'

describe('GameComponent', () => {
  let component: GameComponent
  let fixture: ComponentFixture<GameComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GameComponent],
      imports: [BrowserAnimationsModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fail turn', () => {
    jasmine.clock().install()
    const card1 = new Card(1)
    const card2 = new Card(2)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(0)

    component.selectCard(card1)
    component.selectCard(card2)

    jasmine.clock().tick(1001)

    expect(component.activePlayer$.value).toBe(1)
    expect(component.players$.value[0].score).toBe(0)

    jasmine.clock().uninstall()
  })

  it('should succeed turn', () => {
    jasmine.clock().install()
    const card1 = new Card(1)
    const card2 = new Card(1)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(0)

    component.selectCard(card1)
    component.selectCard(card2)

    jasmine.clock().tick(1001)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(1)

    jasmine.clock().uninstall()
  })

  it('should not play turn (select same card twice)', () => {
    const card1 = new Card(1)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(0)

    component.selectCard(card1)
    component.selectCard(card1)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(0)
  })

  it('should not playing turn (card already found)', () => {
    jasmine.clock().install()

    const card1 = new Card(1)
    const card2 = new Card(1)
    const card3 = new Card(1)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(0)

    component.selectCard(card1)
    component.selectCard(card2)

    jasmine.clock().tick(1001)

    expect(component.activePlayer$.value).toBe(0)
    expect(component.players$.value[0].score).toBe(1)

    component.selectCard(card3)

    expect(component.card1).toBe(null)
    jasmine.clock().uninstall()
  })

  it('should select card1', () => {
    const card = new Card(1)
    component.selectCard(card)

    expect(component.card1).toBe(card)
  })
})
