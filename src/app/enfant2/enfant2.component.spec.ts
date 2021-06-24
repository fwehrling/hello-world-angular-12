import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enfant2Component } from './enfant2.component';

describe('Enfant2Component', () => {
  let component: Enfant2Component;
  let fixture: ComponentFixture<Enfant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enfant2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
