import { Component, OnInit } from '@angular/core';

class User {
  username!: string;
  password!: string;
}

@Component({
  selector: 'hlw-form-template-simple',
  templateUrl: './form-template-simple.component.html',
  styleUrls: ['./form-template-simple.component.css'],
})
export class FormTemplateSimpleComponent implements OnInit {
  user = new User();

  constructor() {}

  ngOnInit(): void {
    this.user.username = 'monusername';
  }

  register(values: any): void {
    console.log(values);
  }

  register2(): void {
    console.log(this.user);
  }
}
