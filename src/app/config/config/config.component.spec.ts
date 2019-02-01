import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterTestingModule } from '@angular/router/testing'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'

import { ConfigComponent } from './config.component'

describe('ConfigComponent', () => {
  let component: ConfigComponent
  let fixture: ComponentFixture<ConfigComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigComponent],
      imports: [NoopAnimationsModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
