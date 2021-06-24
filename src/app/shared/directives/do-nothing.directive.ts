import { Directive } from '@angular/core';

@Directive({
  selector: 'footer[hlwDoNothing=red]',
})
export class DoNothingDirective {
  constructor() {
    console.log('je ne sers à rien !');
  }
}
