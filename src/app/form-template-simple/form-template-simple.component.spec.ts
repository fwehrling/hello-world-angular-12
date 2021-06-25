import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTemplateSimpleComponent } from './form-template-simple.component';

describe('FormTemplateSimpleComponent', () => {
  let component: FormTemplateSimpleComponent;
  let fixture: ComponentFixture<FormTemplateSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTemplateSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTemplateSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
