import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTalentsComponent } from './our-talents.component';
import { TranslateModule, TranslateLoader, TranslateFakeLoader } from '@ngx-translate/core';
import { MatDividerModule } from '@angular/material/divider';
import { GalleriaModule } from 'primeng/galleria';
import { MatIconModule } from '@angular/material/icon';

describe('OurTalentsComponent', () => {
  let component: OurTalentsComponent;
  let fixture: ComponentFixture<OurTalentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurTalentsComponent ],
      imports:[
        MatDividerModule,
        GalleriaModule,
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

    fixture = TestBed.createComponent(OurTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
