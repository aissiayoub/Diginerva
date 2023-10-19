import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurMissionComponent } from './our-mission.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('OurMissionComponent', () => {
  let component: OurMissionComponent;
  let fixture: ComponentFixture<OurMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurMissionComponent ],
      imports:[
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
