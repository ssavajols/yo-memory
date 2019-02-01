import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CardComponent } from './card.component'

describe('CardComponent', () => {
  let component: CardComponent
  let fixture: ComponentFixture<CardComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should set visible state', () => {
    component.visible = true
    expect(component.isVisible()).toBe(true)

    component.visible = false
    expect(component.isVisible()).toBe(false)

    component.selected = true
    expect(component.isVisible()).toBe(true)

    component.selected = false
    expect(component.isVisible()).toBe(false)
  })
})
