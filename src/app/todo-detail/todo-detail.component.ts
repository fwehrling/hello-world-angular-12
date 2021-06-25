import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Todo } from '../shared/interfaces/todo';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'hlw-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent implements OnInit {
  todo$!: Observable<Todo> | null;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todo$ = this.todoService.getTodoById(+id!);
  }
}
