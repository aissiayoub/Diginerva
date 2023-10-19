import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './pages/home/hero/hero.component';
import { MiniCardComponent } from './pages/home/mini-card/mini-card.component';
import { MiniServicesCardsComponent } from './pages/home/mini-services-cards/mini-services-cards.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { OurArticlesComponent } from './pages/home/our-articles/our-articles.component';
import { OurNewsComponent } from './pages/home/our-news/our-news.component';
import { GalleriaModule } from 'primeng/galleria';
import { OurTalentsComponent } from './pages/home/our-talents/our-talents.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { HeroAboutUsComponent } from './pages/about-us/hero-about-us/hero-about-us.component';
import { OurStoryComponent } from './pages/about-us/our-story/our-story.component';
import { JoinOurTeamComponent } from './components/join-our-team/join-our-team.component';
import { MiniTeamCardComponent } from './pages/about-us/mini-team-card/mini-team-card.component'; // Import the LayoutModule
import { ValueComponent } from './pages/about-us/value/value.component';
import { OurStrategyComponent } from './pages/our-strategy/our-strategy.component';
import { StrategyComponent } from './pages/our-strategy/strategy/strategy.component';
import { HeroOurStrategyComponent } from './pages/our-strategy/hero-our-strategy/hero-our-strategy.component';
import { OurMissionComponent } from './pages/our-strategy/our-mission/our-mission.component';
import { OurVisionComponent } from './pages/our-strategy/our-vision/our-vision.component';
import { ContactFormComponent } from './pages/contact/contact-form/contact-form.component';
import { GenericServicePageComponent } from './components/generic-service-page/generic-service-page.component';
import { HeroServiceComponent } from './components/generic-service-page/hero-service/hero-service.component';
import { SecurityInfoCardComponent } from './components/generic-service-page/security-info-card/security-info-card.component';
import { ThreatAwarenessComponent } from './components/generic-service-page/threat-awareness/threat-awareness.component'; // Import the LayoutModule

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    FooterComponent,
    HeroComponent,
    MiniCardComponent,
    MiniServicesCardsComponent,
    OurTalentsComponent,
    OurArticlesComponent,
    OurNewsComponent,
    HeroAboutUsComponent,
    OurStoryComponent,
    JoinOurTeamComponent,
    MiniTeamCardComponent,
    ValueComponent,
    OurStrategyComponent,
    StrategyComponent,
    HeroOurStrategyComponent,
    OurMissionComponent,
    OurVisionComponent,
    ContactFormComponent,
    GenericServicePageComponent,
    HeroServiceComponent,
    SecurityInfoCardComponent,
    ThreatAwarenessComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDividerModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    GalleriaModule,
    MatMenuModule,
    MatSidenavModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/menu.svg'));
    this.matIconRegistry.addSvgIcon('expand_more', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/expand_more.svg'));
    this.matIconRegistry.addSvgIcon('send', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/send.svg'));
    this.matIconRegistry.addSvgIcon('blur', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/blur.svg'));
    this.matIconRegistry.addSvgIcon('semi-blur', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/semi-blur.svg'));
    this.matIconRegistry.addSvgIcon('lens-blur', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/lens-blur.svg'));
    this.matIconRegistry.addSvgIcon('long_arrow', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/long_arrow.svg'));
    this.matIconRegistry.addSvgIcon('play', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/play.svg'));
    this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/close.svg'));
  }
}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
