import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MatDrawer, MatDrawerToggleResult } from '@angular/material/sidenav'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let translateService: TranslateService;
  let mockDrawer: Partial<MatDrawer>;

  beforeEach(async () => {
    
    mockDrawer = {
      open: async (): Promise<MatDrawerToggleResult> => {
        return new Promise((resolve) => {
          // Mock your desired behavior here, but with an actual promise delay
          setTimeout(() => {
            resolve('open' as MatDrawerToggleResult);
          }, 0);
        });
      },
      close: async (): Promise<MatDrawerToggleResult> => {
        return new Promise((resolve) => {
          // Mock your desired behavior here, but with an actual promise delay
          setTimeout(() => {
            resolve('close' as MatDrawerToggleResult);
          }, 0);
        });
      },
    };
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatMenuModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        }),
      ],
      providers: [
        TranslateService,{ provide: MatDrawer, useValue: mockDrawer },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
    fixture.detectChanges();
    component.drawer = mockDrawer as MatDrawer;
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update pageWidth when window is resized', () => {
    const mockInnerWidth = 800;

    const resizeEvent = document.createEvent('Event');
    resizeEvent.initEvent('resize', true, true);
    const windowInnerWidth: number = mockInnerWidth;
    window.innerWidth = windowInnerWidth;
    window.dispatchEvent(resizeEvent);

    expect(component.pageWidth).toEqual(mockInnerWidth);
  });

  it('should set default lang and use lang from TranslateService', () => {
    const lang = 'en';

    component.changeLang(lang);

    expect(component.langUser).toEqual(lang);
    expect(translateService.getDefaultLang()).toEqual(lang);
    expect(translateService.currentLang).toEqual(lang);
  });

  it('should prevent default and stop propagation on scroll when scrolling is disabled', () => {
    const eventMock = new Event('scroll');
    let preventDefaultCalled = false;
    let stopPropagationCalled = false;
    eventMock.preventDefault = () => {
      preventDefaultCalled = true;
    };
    
    eventMock.stopPropagation = () => {
      stopPropagationCalled = true;
    };
    
    component.disableScrolling = true;

    component.onScroll(eventMock);

    expect(preventDefaultCalled).toBeTruthy();
    expect(stopPropagationCalled).toBeTruthy();
   
  });

  it('should not prevent default or stop propagation on scroll when scrolling is enabled', () => {
    const eventMock = new Event('scroll');
    let preventDefaultCalled = false;
    let stopPropagationCalled = false;
  
    eventMock.preventDefault = () => {
      preventDefaultCalled = true;
    };
    eventMock.stopPropagation = () => {
      stopPropagationCalled = true;
    };
    component.disableScrolling = false;
    component.onScroll(eventMock);
    expect(preventDefaultCalled).toBeFalsy();
    expect(stopPropagationCalled).toBeFalsy();

  });
  it('should prevent default and stop propagation on touchmove when scrolling is disabled', () => {
    const eventMock = new TouchEvent('touchmove');
    let preventDefaultCalled = false;
    let stopPropagationCalled = false;
    eventMock.preventDefault = () => {
      preventDefaultCalled = true;
    };
    eventMock.stopPropagation = () => {
      stopPropagationCalled = true;
    };
    component.disableScrolling = true;
    component.onTouchMove(eventMock);
    expect(preventDefaultCalled).toBeTruthy();
    expect(stopPropagationCalled).toBeTruthy();
  });
  

  it('should close the menu and reset properties when closeDrawer is called', () => {
    component.isMenuOpen = true;
    component.disableScrolling = true;
    document.body.style.overflow = 'hidden';
    component.drawer = mockDrawer as MatDrawer;
    component.closeDrawer();

    expect(component.isMenuOpen).toBe(false);
    expect(component.disableScrolling).toBe(false);
    expect(document.body.style.overflow).toBe('auto');
  });

});

  


