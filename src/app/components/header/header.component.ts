import { Component, HostListener, OnInit,ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  langUser = '';
  pageWidth = 0;
  pageHeight = 0;
  isMenuOpen = false;
  activeRoute = '';
  disableScrolling = false;


  @ViewChild('drawer', { static: true }) drawer!: MatDrawer;
 
  constructor(private translate: TranslateService,  private router: Router ) {
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.disableScrolling) {
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo(0, 0); // Keep the window scrolled to the top when scrolling is disabled
    }
  }

  @HostListener('window:touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (this.disableScrolling) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  toggleMenu(buttonId?: string) {
    if (this.isMenuOpen && this.activeRoute === buttonId) {
      this.isMenuOpen = false;
      this.activeRoute = '';
      this.drawer.close();
      this.disableScrolling = false; 
    } else {
      this.isMenuOpen = true;
      this.drawer.open();
      this.activeRoute = buttonId || this.router.url; 
      this.disableScrolling = true; 
      document.body.style.overflow = 'hidden'; 
    }
  }
  
  
  onMenuOpened(opened: boolean) {
    this.isMenuOpen = opened;
  }
  
  closeDrawer() {
    this.isMenuOpen = false; // Close the menu
    this.drawer.close(); // Close the mat-drawer
    this.disableScrolling = false; // Enable scrolling when the drawer is closed
    document.body.style.overflow = 'auto'; // Restore scrolling on the body element
  }

  
  ngOnInit(){
    this.langUser = this.translate.currentLang;
    this.pageWidth = window.innerWidth;
    this.pageHeight = window.innerHeight;

    this.activeRoute = this.router.url;
  }

  changeLang(lang: string){
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.langUser = lang;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.pageWidth = window.innerWidth;
    console.log(event);
  }
}
