import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLaptopComponent } from './search-laptop.component';

describe('SearchLaptopComponent', () => {
  let component: SearchLaptopComponent;
  let fixture: ComponentFixture<SearchLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
