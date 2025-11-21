import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokieClicker } from './cokie-clicker';

describe('CokieClicker', () => {
  let component: CokieClicker;
  let fixture: ComponentFixture<CokieClicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CokieClicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CokieClicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
