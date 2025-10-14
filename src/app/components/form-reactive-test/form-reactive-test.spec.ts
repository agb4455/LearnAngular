import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveTest } from './form-reactive-test';

describe('FormReactiveTest', () => {
  let component: FormReactiveTest;
  let fixture: ComponentFixture<FormReactiveTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormReactiveTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormReactiveTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
