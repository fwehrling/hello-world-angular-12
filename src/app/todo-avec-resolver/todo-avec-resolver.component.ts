import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'hlw-todo-avec-resolver',
  templateUrl: './todo-avec-resolver.component.html',
  styleUrls: ['./todo-avec-resolver.component.css'],
})
export class TodoAvecResolverComponent implements OnInit {
  todos: Todo[] = [];
  todo!: Todo;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? 0;
    this.route.data.subscribe((data: Data) => (this.todos = data['todos']));
    this.todo = this.todos.filter((todo: Todo) => todo.id === +id)[0];
  }
}
