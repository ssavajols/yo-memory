import { TestBed } from '@angular/core/testing';

import { GameOptionsService } from './game-options.service';

describe('GameOptionsService', () => {
  let service: GameOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(GameOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have 3 players', () => {
    service.players.length = 0;

    service.setPlayers(3);

    expect(service.players.length).toBe(3);

    service.setPlayers(2);

    expect(service.players.length).toBe(2);
  });

  it('should have 10 cards', () => {
    service.cards.length = 0;

    service.setCards(5);

    expect(service.cards.length).toBe(10);
  });
});
