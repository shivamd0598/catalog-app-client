import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorListUserComponent } from './vendor-list-user.component';

describe('VendorListUserComponent', () => {
  let component: VendorListUserComponent;
  let fixture: ComponentFixture<VendorListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
