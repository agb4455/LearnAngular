import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Semaforo } from './semaforo';

describe('Semaforo', () => {
  let component: Semaforo;
  let fixture: ComponentFixture<Semaforo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Semaforo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Semaforo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
