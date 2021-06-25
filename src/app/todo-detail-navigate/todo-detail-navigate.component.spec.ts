import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailNavigateComponent } from './todo-detail-navigate.component';

describe('TodoDetailNavigateComponent', () => {
  let component: TodoDetailNavigateComponent;
  let fixture: ComponentFixture<TodoDetailNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDetailNavigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDetailNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
