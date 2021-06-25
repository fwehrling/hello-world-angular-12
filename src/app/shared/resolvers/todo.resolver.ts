import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoResolver implements Resolve<Todo[]> {
  constructor(private todoService: TodoService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this.todoService.getTodos();
  }
}
