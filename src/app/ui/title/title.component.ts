import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'yom-title',
  template: `
    <h1><ng-content></ng-content></h1>
  `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
