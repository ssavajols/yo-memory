export class Card {
  src: string;
  img: HTMLImageElement;

  constructor(index: number = 0) {
    this.src = `card-${index}.png`;
  }
}
