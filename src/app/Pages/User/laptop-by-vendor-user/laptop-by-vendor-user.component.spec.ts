import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopByVendorUserComponent } from './laptop-by-vendor-user.component';

describe('LaptopByVendorUserComponent', () => {
  let component: LaptopByVendorUserComponent;
  let fixture: ComponentFixture<LaptopByVendorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopByVendorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopByVendorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
