import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grafic } from './grafic';

describe('Grafic', () => {
  let component: Grafic;
  let fixture: ComponentFixture<Grafic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grafic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grafic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
