import { Directive } from '@angular/core';

@Directive({
  selector: 'button[hlwDoNothing=3]',
})
export class DoNothingDirective {
  constructor() {
    console.log('je ne sers à rien !');
  }
}
