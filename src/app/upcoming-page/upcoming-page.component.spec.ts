import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingPageComponent } from './upcoming-page.component';

describe('UpcomingPageComponent', () => {
  let component: UpcomingPageComponent;
  let fixture: ComponentFixture<UpcomingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
