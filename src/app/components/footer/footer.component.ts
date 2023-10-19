import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'; //add the import

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  langUser = '';
  pageWidth = 0;
  pageHeight = 0;
  date: Date = new Date();
  year = 0;
  contactForm: FormGroup = new FormGroup({});

  constructor(
    private translate: TranslateService,
    private breakpointObserver: BreakpointObserver
  ) {} 

  ngOnInit() {
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;
    this.year = this.date.getFullYear();
    this.contactForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      message: new FormControl(),
    });

    // Set up BreakpointObserver to observe changes in handset portrait or landscape mode
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait, Breakpoints.HandsetLandscape,'(max-width: 1023px)',])
      .subscribe((result) => {
        if (result.matches) {
          // If the viewport matches a handset breakpoint, hide the language change button
          this.hideLanguageButton();
        } else {
          // If the viewport does not match a handset breakpoint, show the language change button
          this.showLanguageButton();
        }
      });
  }

  changeLang(lang: string) {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  }

  //Create methods to handle hiding/showing the language change button

  hideLanguageButton() {
    const langButton = document.getElementById('lang_item');
    if (langButton) {
      langButton.style.display = 'none';
    }
  }

  showLanguageButton() {
    const langButton = document.getElementById('lang_item');
    if (langButton) {
      langButton.style.display = 'flex';
    }
  }
}
