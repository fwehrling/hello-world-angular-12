import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../shared/interfaces/todo';

@Component({
  selector: 'hlw-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo!: Todo;
  constructor() {}

  ngOnInit(): void {}
}
