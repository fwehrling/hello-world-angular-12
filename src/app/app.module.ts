import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ServicesComponent } from './services/services.component';
import { WordPipe } from './shared/pipes/word.pipe';
import { FromNowPipe } from './shared/pipes/from-now.pipe';
import { CarsComponent } from './cars/cars.component';
import { LettersPipe } from './shared/pipes/letters.pipe';
import { BookComponent } from './book/book.component';
import { DoNothingDirective } from './shared/directives/do-nothing.directive';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ServicesComponent,
    WordPipe,
    FromNowPipe,
    CarsComponent,
    LettersPipe,
    BookComponent,
    DoNothingDirective,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
