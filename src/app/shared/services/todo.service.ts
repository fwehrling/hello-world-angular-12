import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(shareReplay(1));
  }

  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
  }

  addTodo(todo: Todo): any {
    return this.http.post<Todo>(
      'https://jsonplaceholder.typicode.com/todos',
      todo
    );
  }
}
