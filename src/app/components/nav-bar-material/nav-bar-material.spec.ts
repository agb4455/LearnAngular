import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMaterial } from './nav-bar-material';

describe('NavBarMaterial', () => {
  let component: NavBarMaterial;
  let fixture: ComponentFixture<NavBarMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
