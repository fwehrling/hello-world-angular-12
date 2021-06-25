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
import { HighlightDirective } from './shared/directives/highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { EnfantComponent } from './enfant/enfant.component';
import { Enfant2Component } from './enfant2/enfant2.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoDetailNavigateComponent } from './todo-detail-navigate/todo-detail-navigate.component';
import { RouteParentComponent } from './route-parent/route-parent.component';
import { RouteFillesComponent } from './route-filles/route-filles.component';
import { RouteFillesBComponent } from './route-filles-b/route-filles-b.component';
import { AuthentificationGuard } from './shared/guards/authentification.guard';
import { TodoAvecResolverComponent } from './todo-avec-resolver/todo-avec-resolver.component';
import { TodoResolver } from './shared/resolvers/todo.resolver';
import { AdministrationModule } from './administration/administration.module';

const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoDetailComponent },
  { path: 'todos/:id/navigate', component: TodoDetailNavigateComponent },
  { path: 'parent', component: ParentComponent },
  {
    path: 'route-parent',
    component: RouteParentComponent,
    canActivate: [AuthentificationGuard],
    children: [
      { path: '', component: RouteFillesComponent },
      { path: 'b', component: RouteFillesBComponent },
    ],
  },
  {
    path: 'todo-avec-resolver/:id',
    component: TodoAvecResolverComponent,
    resolve: { todos: TodoResolver },
  },
  {
    path: 'administration',
    loadChildren: () =>
      import('./administration/administration.module').then(
        (m) => m.AdministrationModule
      ),
  },
  { path: '**', redirectTo: '' },
];

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
    HighlightDirective,
    ParentComponent,
    EnfantComponent,
    Enfant2Component,
    TodoComponent,
    TodosComponent,
    TodoDetailComponent,
    TodoDetailNavigateComponent,
    RouteParentComponent,
    RouteFillesComponent,
    RouteFillesBComponent,
    TodoAvecResolverComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
