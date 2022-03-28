import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopUpdateComponent } from './laptop-update.component';

describe('LaptopUpdateComponent', () => {
  let component: LaptopUpdateComponent;
  let fixture: ComponentFixture<LaptopUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
