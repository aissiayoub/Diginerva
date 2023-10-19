import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStrategyComponent } from './our-strategy.component';

describe('OurStrategyComponent', () => {
  let component: OurStrategyComponent;
  let fixture: ComponentFixture<OurStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurStrategyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
