import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopByVendorComponent } from './laptop-by-vendor.component';

describe('LaptopByVendorComponent', () => {
  let component: LaptopByVendorComponent;
  let fixture: ComponentFixture<LaptopByVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopByVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopByVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
