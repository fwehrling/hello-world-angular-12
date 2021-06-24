import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/interfaces/book';

@Component({
  selector: 'hlw-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  valueInitial: string | null = null;
  isSelected: boolean | undefined;
  isHidden: boolean = false;
  couleur!: string;
  increment: number = 0;
  valeurDeMaVariableLocale!: string;
  width!: number;
  height!: number;
  objStyle!: object;
  myClass: boolean = false;
  books: Book[] = [
    { title: 'livre1', page: 32 },
    { title: 'livre2', page: 26 },
    { title: 'livre3', page: 15 },
    { title: 'livre4', page: 19 },
  ];
  info!: string;

  ngOnInit(): void {
    this.valueInitial = 'ma valeur initiale';
    this.isSelected = false;
    this.couleur = 'purple';
    this.width = 50;
    this.height = 50;
    this.objStyle = {
      width: '80px',
      height: this.height,
      backgroundColor: this.couleur,
    };
  }

  checkValue(i: number): boolean {
    return i % 2 === 0;
  }

  onClick(): void {
    this.isHidden = !this.isHidden;
    this.increment++;
    this.valueInitial = `ma valeur est ${this.increment}`;
    this.couleur = this.couleur === 'purple' ? 'red' : 'purple';
    this.width = 200;
    this.height = 200;
    this.objStyle = {
      width: '100px',
      'height.px': this.height + 90,
      backgroundColor: this.couleur,
    };
    this.myClass = !this.myClass;
  }

  premierClick(): void {
    alert('1er click');
  }

  deuxiemeClick(event: Event): void {
    event.stopPropagation();
    alert('2ème click');
  }

  onSpace(): void {
    console.log('barre espace appuyée!');
  }

  showMaVariableLocale(input: any): void {
    // console.log(input);
    this.valeurDeMaVariableLocale = input;
  }

  identify(index: number, item: Book): string {
    return item.title;
  }

  removeBook(index: number): void {
    this.books.splice(index, 1);
  }

  information(info: string) {
    this.info = `BOOKS : ${info}`;
  }

  deleteBook(i: number) {
    this.removeBook(i);
  }

  changeColor() {
    this.couleur = 'orange';
  }
}
