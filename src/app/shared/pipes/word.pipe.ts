import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word',
})
export class WordPipe implements PipeTransform {
  transform(value: string): string {
    return `${value} etc...`;
  }
}
