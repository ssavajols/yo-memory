import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'yom-inline-select',
  template: `
    <button
      *ngFor="let choice of choices; let i = index"
      class="choice choice-{{ i }}"
      [ngClass]="{ selected: choice === selected }"
      (click)="handleSelect(choice)"
    >
      {{ choice }}
    </button>
  `,
  styleUrls: ['./inline-select.component.scss']
})
export class InlineSelectComponent implements OnInit {
  constructor() {}

  @Input() selected: any = null
  @Input() choices: any[] = []
  @Output() select = new EventEmitter()

  ngOnInit() {
    if (!this.selected) {
      this.handleSelect(this.choices[0])
    }
  }

  handleSelect(choice) {
    this.selected = choice
    this.select.emit(choice)
  }
}
