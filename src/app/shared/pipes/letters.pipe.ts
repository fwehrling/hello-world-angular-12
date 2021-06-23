import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letters',
})
export class LettersPipe implements PipeTransform {
  transform(value: string, ...args: number[]): string {
    let phrase: string[] = [];
    let isMajuscule: boolean = args[1] ? true : false;
    [...value].forEach((letter: string, index: number) => {
      if (args[0] === 0 && letter === ' ') {
        phrase.push(letter);
        return;
      }
      const char = isMajuscule ? letter.toUpperCase() : letter.toLowerCase();
      isMajuscule = !isMajuscule;
      phrase.push(char);
    });
    return phrase.join('');
  }
}
