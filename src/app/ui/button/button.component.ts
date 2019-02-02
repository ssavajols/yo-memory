import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'yom-button',
  template: `
    <button (touchend)="action.emit(value)" (mouseup)="action.emit(value)">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Output() action = new EventEmitter()
  @Input() value: any

  constructor() {}

  ngOnInit() {}
}
