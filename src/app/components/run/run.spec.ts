import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Run } from './run';

describe('Run', () => {
  let component: Run;
  let fixture: ComponentFixture<Run>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Run]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Run);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
