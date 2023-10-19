import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewsComponent } from './our-news.component';

describe('OurNewsComponent', () => {
  let component: OurNewsComponent;
  let fixture: ComponentFixture<OurNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
