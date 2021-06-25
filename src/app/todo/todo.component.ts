import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'hlw-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  detailTodo(id: number): void {
    this.router.navigate(['/', 'todos', id]);
  }
}
