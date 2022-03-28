import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopByNameComponent } from './laptop-by-name.component';

describe('LaptopByNameComponent', () => {
  let component: LaptopByNameComponent;
  let fixture: ComponentFixture<LaptopByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopByNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
