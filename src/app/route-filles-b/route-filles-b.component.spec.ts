import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFillesBComponent } from './route-filles-b.component';

describe('RouteFillesBComponent', () => {
  let component: RouteFillesBComponent;
  let fixture: ComponentFixture<RouteFillesBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteFillesBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFillesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
