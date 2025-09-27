import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaforoAutomatico } from './semaforo-automatico';

describe('SemaforoAutomatico', () => {
  let component: SemaforoAutomatico;
  let fixture: ComponentFixture<SemaforoAutomatico>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemaforoAutomatico]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaforoAutomatico);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
