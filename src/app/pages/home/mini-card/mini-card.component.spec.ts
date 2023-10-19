import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCardComponent } from './mini-card.component';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
describe('MiniCardComponent', () => {
  let component: MiniCardComponent;
  let fixture: ComponentFixture<MiniCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniCardComponent ],
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

    fixture = TestBed.createComponent(MiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should apply flex-direction: column for screen width < 525px ', ()=>{
    (window as Window & typeof globalThis).innerWidth = 525;
    fixture.detectChanges();
    const infoElement = fixture.nativeElement.querySelector('.card');
    expect(window.getComputedStyle(infoElement).flexDirection).not.toBe('row');
  });
});
