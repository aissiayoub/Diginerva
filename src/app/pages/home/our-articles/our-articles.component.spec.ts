import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurArticlesComponent } from './our-articles.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('OurArticlesComponent', () => {
  let component: OurArticlesComponent;
  let fixture: ComponentFixture<OurArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurArticlesComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
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

    fixture = TestBed.createComponent(OurArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open the article link in a new window', () => {
    const windowOpenSpy = jest.spyOn(window, 'open');

    // Choose one of the articles to test the readArticle function
    const article = component.tab[0];
    const articlePath = article.articlePath;

    component.readArticle(articlePath);

    expect(windowOpenSpy).toHaveBeenCalledWith(articlePath);
  });
});
