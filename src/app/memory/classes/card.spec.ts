import { Card } from './card';

describe('Card', () => {
  it('should create an instance', () => {
    const card1 = new Card();
    const card2 = new Card(10);

    expect(card1).toBeTruthy();
    expect(card1.src).toBe('card-0.png');
    expect(card2.src).toBe('card-10.png');
  });
});
