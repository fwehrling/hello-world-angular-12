import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor() {}

  getBooks(): Book[] {
    return [{ title: 'titre1' }, { title: 'titre2' }];
  }
}
