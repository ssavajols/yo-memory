import { TestBed } from '@angular/core/testing'

import { GameService } from './game.service'
import { Card } from '../classes/card'

describe('GameService', () => {
  let service: GameService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.get(GameService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should set new game', () => {
    service.startGame(3, 5)

    expect(service.activePlayer$.value).toBe(0)
  })

  it('should not set new game (throw error "no players")', () => {
    expect(() => {
      service.startGame(0, 5)
    }).toThrowError()
  })

  it('shoulds compare 2 selected cards (failed)', () => {
    const result = service.matchCards(new Card(1), new Card(2))

    expect(result).toBe(false)
  })

  it('shoulds compare 2 selected cards (success)', () => {
    const card1 = new Card(1)
    const card2 = new Card(1)
    const result = service.matchCards(card1, card2)

    expect(result).toBe(true)
  })

  it('should play 1 turn (failed)', () => {
    service.startGame(2, 5)

    service.playTurn(new Card(1), new Card(2))

    expect(service.cardsRemaining).toBe(10)
    expect(service.activePlayer$.value).toBe(1)

    service.playTurn(new Card(1), new Card(2))

    expect(service.activePlayer$.value).toBe(0)
  })

  it('should play 1 turn (success)', () => {
    const card1 = new Card(1)
    const card2 = new Card(1)
    service.startGame(2, 5)

    service.playTurn(card1, card2)

    expect(service.cardsRemaining).toBe(8)
    expect(service.activePlayer$.value).toBe(0)
    expect(service.getActivePlayer().score).toBe(1)
  })

  it('should play 1 turn (success)', () => {
    const card1 = new Card(1)
    const card2 = new Card(1)

    spyOn(service.isEndGame$, 'next')
    service.startGame(2, 2)

    service.playTurn(card1, card2)
    service.playTurn(card1, card2)

    expect(service.cardsRemaining).toBe(0)
    expect(service.isEndGame$.next).toHaveBeenCalled()
  })

  it('should compute correct game duration', () => {
    service.startGameTime = new Date(100)
    service.endGameTime = new Date(201)
    expect(service.getGameDuration().getTime()).toBe(new Date(101).getTime())
  })
})
