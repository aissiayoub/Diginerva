import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent],
      imports: [
        ReactiveFormsModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  }, 10000);

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set initial values for contactForm controls', () => {
    expect(component.contactForm.get('fullName')).toBeInstanceOf(FormControl);
    expect(component.contactForm.get('email')).toBeInstanceOf(FormControl);
    expect(component.contactForm.get('phone')).toBeInstanceOf(FormControl);
    expect(component.contactForm.get('message')).toBeInstanceOf(FormControl);
  });

  it('should set year correctly', () => {
    const currentYear = new Date().getFullYear();
    expect(component.year).toBe(currentYear);
  });

  it('should change language on menu item click', waitForAsync(() => {
    // Mock the translateService.use method
    const useSpy = jest.spyOn(translateService, 'use');

    // Choose one of the language menu items
    const langMenuItem = fixture.debugElement.query(By.css('#lang_item'));

    // Simulate a click on the language menu item
    langMenuItem.nativeElement.click();

    fixture.detectChanges(); // Trigger change detection to update the DOM

    fixture.whenStable().then(() => {
      // Get one of the language buttons from the menu
      const langButton = fixture.debugElement.query(By.css('#lang'));

      // Simulate a click on the language button
      langButton.nativeElement.click();

      // Check if the translateService.use method is called with the correct argument
      expect(useSpy).toHaveBeenCalledWith('en'); // Replace 'en' with the desired language code
    });
  }));

  it('should show language button', () => {
    // Arrange
    const langButtonElement = document.createElement('div');
    langButtonElement.id = 'lang_item';
    langButtonElement.style.display = 'none'; // Simulate hidden state
    document.body.appendChild(langButtonElement);
  
    // Act
    component.showLanguageButton();
    fixture.detectChanges();
  
    // Assert
    const langButton = fixture.debugElement.query(By.css('#lang_item'));
  
    // Expect the language button's display style to be 'flex'
    expect(langButton.nativeElement.style.display).toBe('flex');
  
    // Cleanup
    document.body.removeChild(langButtonElement);
  });
  
  it('should hide language button', () => {
    // Arrange
    const langButtonElement = document.createElement('div');
    langButtonElement.id = 'lang_item';
    document.body.appendChild(langButtonElement);
  
    // Act
    component.hideLanguageButton();
    fixture.detectChanges();
  
    // Assert
    const langButton = fixture.debugElement.query(By.css('#lang_item'));
  
    // Expect the language button's display style to be 'none'
    expect(langButton.nativeElement.style.display).toBe('none');
  
    // Cleanup
    document.body.removeChild(langButtonElement);
  });
});
