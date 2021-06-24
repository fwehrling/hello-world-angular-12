import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hlw-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  @Output() information: EventEmitter<string> = new EventEmitter();
  @Output() deleteBook: EventEmitter<number> = new EventEmitter();
  tableau: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.tableau = [1, 2, 3, 4];
  }

  send() {
    this.information.emit('je viens du composant book');
  }

  delete(i: number) {
    this.tableau.splice(i, 1);
    this.deleteBook.emit(i);
  }
}
