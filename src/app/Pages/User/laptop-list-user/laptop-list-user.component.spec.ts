import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopListUserComponent } from './laptop-list-user.component';

describe('LaptopListUserComponent', () => {
  let component: LaptopListUserComponent;
  let fixture: ComponentFixture<LaptopListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
