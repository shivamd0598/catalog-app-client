import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDetailsUserComponent } from './vendor-details-user.component';

describe('VendorDetailsUserComponent', () => {
  let component: VendorDetailsUserComponent;
  let fixture: ComponentFixture<VendorDetailsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorDetailsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDetailsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
