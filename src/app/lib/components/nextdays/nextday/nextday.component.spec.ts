import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextdayComponent } from './nextday.component';

describe('NextdayComponent', () => {
  let component: NextdayComponent;
  let fixture: ComponentFixture<NextdayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NextdayComponent]
    });
    fixture = TestBed.createComponent(NextdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
