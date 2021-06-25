import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFillesComponent } from './route-filles.component';

describe('RouteFillesComponent', () => {
  let component: RouteFillesComponent;
  let fixture: ComponentFixture<RouteFillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
