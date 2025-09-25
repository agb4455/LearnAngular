import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Matatopos } from './matatopos';

describe('Matatopos', () => {
  let component: Matatopos;
  let fixture: ComponentFixture<Matatopos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Matatopos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Matatopos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
