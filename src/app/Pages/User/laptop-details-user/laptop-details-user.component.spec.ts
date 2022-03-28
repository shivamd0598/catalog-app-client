import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDetailsUserComponent } from './laptop-details-user.component';

describe('LaptopDetailsUserComponent', () => {
  let component: LaptopDetailsUserComponent;
  let fixture: ComponentFixture<LaptopDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
