import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'hlw-todo-detail-navigate',
  templateUrl: './todo-detail-navigate.component.html',
  styleUrls: ['./todo-detail-navigate.component.css'],
})
export class TodoDetailNavigateComponent implements OnInit {
  todo$!: Observable<Todo>;
  id!: number;

  constructor(
    private todoService: TodoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todo$ = this.route.paramMap.pipe(
      map((params: any) => params.get('id')),
      tap((id: string) => (this.id = +id)),
      switchMap((id: string) => this.todoService.getTodoById(+id))
    );
  }

  previousTodo(): void {
    this.router.navigate(['/', 'todos', --this.id, 'navigate']);
  }

  nextTodo(): void {
    this.router.navigate(['/', 'todos', ++this.id, 'navigate']);
  }
}
