import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAvecResolverComponent } from './todo-avec-resolver.component';

describe('TodoAvecResolverComponent', () => {
  let component: TodoAvecResolverComponent;
  let fixture: ComponentFixture<TodoAvecResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoAvecResolverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoAvecResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
