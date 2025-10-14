import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalloweenReguisterForm } from './halloween-reguister-form';

describe('HalloweenReguisterForm', () => {
  let component: HalloweenReguisterForm;
  let fixture: ComponentFixture<HalloweenReguisterForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalloweenReguisterForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalloweenReguisterForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
