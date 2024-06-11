import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexthoursComponent } from './nexthours.component';

describe('NexthoursComponent', () => {
  let component: NexthoursComponent;
  let fixture: ComponentFixture<NexthoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NexthoursComponent]
    });
    fixture = TestBed.createComponent(NexthoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
