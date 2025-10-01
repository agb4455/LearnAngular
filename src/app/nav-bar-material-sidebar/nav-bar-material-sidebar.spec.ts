import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMaterialSidebar } from './nav-bar-material-sidebar';

describe('NavBarMaterialSidebar', () => {
  let component: NavBarMaterialSidebar;
  let fixture: ComponentFixture<NavBarMaterialSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarMaterialSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarMaterialSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
