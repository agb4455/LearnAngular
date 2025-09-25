import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorSemaforo } from './contador-semaforo';

describe('ContadorSemaforo', () => {
  let component: ContadorSemaforo;
  let fixture: ComponentFixture<ContadorSemaforo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorSemaforo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorSemaforo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
