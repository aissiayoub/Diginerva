import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniServicesCardsComponent } from './mini-services-cards.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

describe('MiniServicesCardsComponent', () => {
  let component: MiniServicesCardsComponent;
  let fixture: ComponentFixture<MiniServicesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniServicesCardsComponent ],
      imports:[
        MatIconModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniServicesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
