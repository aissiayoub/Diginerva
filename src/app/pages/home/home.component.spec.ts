import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeroComponent } from './hero/hero.component';
import { MiniCardComponent } from './mini-card/mini-card.component';
import { MiniServicesCardsComponent } from './mini-services-cards/mini-services-cards.component';
import { OurArticlesComponent } from './our-articles/our-articles.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { OurTalentsComponent } from './our-talents/our-talents.component';
import { OurNewsComponent } from './our-news/our-news.component';
import { MatIconModule } from '@angular/material/icon';
import { GalleriaModule } from 'primeng/galleria';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, HeroComponent, MiniCardComponent, MiniServicesCardsComponent, OurArticlesComponent, OurTalentsComponent, OurNewsComponent ],
      imports:[
        MatDialogModule,
        MatIconModule,
        GalleriaModule,
        MatDividerModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 when the list length is divisible by 3', () => {
    const list = [1, 2, 3, 4, 5, 6];

    const result = component.calculElements(list);

    expect(result).toEqual(0);
  });

  it('should return 2 when the list length is 2 more than a multiple of 3', () => {
    const list = [1, 2, 3, 4, 5];

    const result = component.calculElements(list);

    expect(result).toEqual(2);
  });

  it('should return 1 when the list length is 1 more than a multiple of 3', () => {
    const list = [1, 2, 3, 4];

    const result = component.calculElements(list);

    expect(result).toEqual(1);
  });
  it('should apply flex-direction: column for screen width < 850px ', ()=>{
    (window as Window & typeof globalThis).innerWidth = 850;
    fixture.detectChanges();
    const infoElement = fixture.nativeElement.querySelector('.info');
    expect(window.getComputedStyle(infoElement).flexDirection).not.toBe('row');
  })

});