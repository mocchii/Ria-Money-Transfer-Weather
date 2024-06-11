import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexthourComponent } from './nexthour.component';

describe('NexthourComponent', () => {
  let component: NexthourComponent;
  let fixture: ComponentFixture<NexthourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NexthourComponent]
    });
    fixture = TestBed.createComponent(NexthourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
