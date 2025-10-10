import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Race } from './race';

describe('Race', () => {
  let component: Race;
  let fixture: ComponentFixture<Race>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Race]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Race);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
