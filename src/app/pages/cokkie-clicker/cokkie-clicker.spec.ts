import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokkieClicker } from './cokkie-clicker';

describe('CokkieClicker', () => {
  let component: CokkieClicker;
  let fixture: ComponentFixture<CokkieClicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CokkieClicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CokkieClicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
