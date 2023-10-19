import { Component, Input,HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import heroData from '../../../../assets/data/hero-data.json'

@Component({
  selector: 'app-hero-about-us',
  templateUrl: './hero-about-us.component.html',
  styleUrls: ['./hero-about-us.component.scss']
})
export class HeroAboutUsComponent {
  constructor(private translate: TranslateService) { this.checkScreenSize(); }
  @Input() title = '';
  @Input() description = '';
  @Input() imagePaths: string[] = heroData;
  zoomStates: boolean[] = Array(this.imagePaths.length).fill(false);
  isVerticalDisplay = false;
  isMobile = false;

  zoomInImage(index: number): void {
    this.zoomStates[index] = true;
  }

  zoomOutImage(index: number): void {
    this.zoomStates[index] = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isVerticalDisplay = window.innerWidth <= 1140;
    this.isMobile = window.innerWidth <= 1140;
  }

  
}
