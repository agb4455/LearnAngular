import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorTimeHallowen } from './contador-time-hallowen';

describe('ContadorTimeHallowen', () => {
  let component: ContadorTimeHallowen;
  let fixture: ComponentFixture<ContadorTimeHallowen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorTimeHallowen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorTimeHallowen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
