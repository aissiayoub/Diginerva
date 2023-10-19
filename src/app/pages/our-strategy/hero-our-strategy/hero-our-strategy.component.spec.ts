import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroOurStrategyComponent } from './hero-our-strategy.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

describe('HeroOurStrategyComponent', () => {
  let component: HeroOurStrategyComponent;
  let fixture: ComponentFixture<HeroOurStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroOurStrategyComponent ],
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

    fixture = TestBed.createComponent(HeroOurStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
