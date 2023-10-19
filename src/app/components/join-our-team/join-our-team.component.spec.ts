import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOurTeamComponent } from './join-our-team.component';
import { MatIconModule } from '@angular/material/icon';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { GalleriaModule } from 'primeng/galleria';

describe('JoinOurTeamComponent', () => {
  let component: JoinOurTeamComponent;
  let fixture: ComponentFixture<JoinOurTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinOurTeamComponent ],
      imports:[
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

    fixture = TestBed.createComponent(JoinOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
