import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  tap,
} from 'rxjs/operators';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'hlw-form-code',
  templateUrl: './form-code.component.html',
  styleUrls: ['./form-code.component.css'],
})
export class FormCodeComponent implements OnInit {
  usernameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  birthdateCtrl!: FormControl;
  confirmCtrl!: FormControl;
  passwordForm!: FormGroup;
  userForm!: FormGroup;
  response!: string;

  constructor(private fb: FormBuilder, private todoService: TodoService) {}

  static isOldEnough(control: FormControl) {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static passwordMatch(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;
    return password === confirm ? null : { matchingError: true };
  }

  ngOnInit(): void {
    this.usernameCtrl = this.fb.control(
      '',
      [Validators.required, Validators.minLength(3)],
      (control) => this.isUsernameAvailable(control)
    );

    this.passwordCtrl = this.fb.control('', Validators.required);

    this.confirmCtrl = this.fb.control('', Validators.required);

    this.birthdateCtrl = this.fb.control('', [
      Validators.required,
      FormCodeComponent.isOldEnough,
    ]);

    this.passwordForm = this.fb.group(
      {
        password: this.passwordCtrl,
        confirm: this.confirmCtrl,
      },
      { validator: FormCodeComponent.passwordMatch }
    );

    this.userForm = this.fb.group({
      username: this.usernameCtrl,
      passwordForm: this.passwordForm,
      birthdate: this.birthdateCtrl,
    });

    this.usernameCtrl.valueChanges
      .pipe(
        tap((value: string) => console.log(value)),
        filter((query) => query.length >= 3),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((value) => this.todoService.search(value))
      )
      .subscribe((results: any) => (this.response = results));
  }

  isUsernameAvailable(control: AbstractControl) {
    const username = control.value;
    return username === 'franck' ? of(null) : of({ alreadyUsed: true });
  }

  register() {
    console.log(this.userForm.value);
  }
}
