import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemaforoDoble } from './semaforo-doble';

describe('SemaforoDoble', () => {
  let component: SemaforoDoble;
  let fixture: ComponentFixture<SemaforoDoble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemaforoDoble]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemaforoDoble);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
