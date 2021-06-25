import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'hlw-form-code',
  templateUrl: './form-code.component.html',
  styleUrls: ['./form-code.component.css'],
})
export class FormCodeComponent implements OnInit {
  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  birthdateCtrl!: FormControl;
  userForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  static isOldEnough(control: FormControl) {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  ngOnInit(): void {
    this.usernameCtrl = this.fb.control('', [
      Validators.required,
      Validators.minLength(3),
    ]);

    this.passwordCtrl = this.fb.control('', Validators.required);

    this.birthdateCtrl = this.fb.control('', [
      Validators.required,
      FormCodeComponent.isOldEnough,
    ]);

    this.userForm = this.fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl,
      birthdate: this.birthdateCtrl,
    });
  }

  register() {
    console.log(this.userForm.value);
  }
}
