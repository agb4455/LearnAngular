import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EyeCandyPage } from './eye-candy-page';

describe('EyeCandyPage', () => {
  let component: EyeCandyPage;
  let fixture: ComponentFixture<EyeCandyPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EyeCandyPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EyeCandyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
