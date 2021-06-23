import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Book } from '../shared/interfaces/book';
import { BookService } from '../shared/services/book.service';
import { CarService } from '../shared/services/car.service';

@Component({
  selector: 'hlw-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  public books: Book[] = [];
  public cars: any[] = [];
  public date: Date = new Date();
  asyncGreeting!: Promise<string>;

  constructor(
    private title: Title,
    private meta: Meta,
    private bookService: BookService,
    private carService: CarService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Un nouveau titre');
    this.meta.addTag({ name: 'author', content: 'Franck' });
    this.books = this.bookService.getBooks();
    this.cars = this.carService.getCars();

    this.asyncGreeting = new Promise((resolve) => {
      // après 1 seconde, la promesse sera résolue
      window.setTimeout(() => resolve('hello'), 3000);
    });
  }
}
