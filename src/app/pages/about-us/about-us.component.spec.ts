import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us.component';
import { MiniTeamCardComponent } from './mini-team-card/mini-team-card.component'; // Import MiniTeamCardComponent
import { JoinOurTeamComponent } from '../../components/join-our-team/join-our-team.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { GalleriaModule } from 'primeng/galleria';
import { MatDividerModule } from '@angular/material/divider';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ValueComponent } from './value/value.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { HeroAboutUsComponent } from './hero-about-us/hero-about-us.component';
describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsComponent , MiniTeamCardComponent,JoinOurTeamComponent,ValueComponent,OurStoryComponent,HeroAboutUsComponent ], // Add MiniTeamCardComponent
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

    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
