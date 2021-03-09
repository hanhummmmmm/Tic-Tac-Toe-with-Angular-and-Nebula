import { stringify } from '@angular/compiler/src/util';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button>{{ value }}</button>
  `,
  styles: ['button{ width: 200px; height: 200px; font-size: 5rem;}']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';
}
