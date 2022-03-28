import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLaptopUserComponent } from './search-laptop-user.component';

describe('SearchLaptopUserComponent', () => {
  let component: SearchLaptopUserComponent;
  let fixture: ComponentFixture<SearchLaptopUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLaptopUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLaptopUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
