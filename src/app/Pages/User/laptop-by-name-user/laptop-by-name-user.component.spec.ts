import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopByNameUserComponent } from './laptop-by-name-user.component';

describe('LaptopByNameUserComponent', () => {
  let component: LaptopByNameUserComponent;
  let fixture: ComponentFixture<LaptopByNameUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopByNameUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopByNameUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
