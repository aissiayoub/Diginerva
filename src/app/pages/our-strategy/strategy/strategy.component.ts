import { Component, ElementRef, HostListener} from '@angular/core';
import { Strategy } from 'src/app/models/strategy.model';
import StrategyData from '../../../../assets/data/strategy.json';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent {
  cards: Strategy[] = StrategyData;


  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY;

    const elementOffsetTop = this.element.nativeElement.offsetTop;

    const scrollOffset = elementOffsetTop - scrollPosition;

    const container = this.element.nativeElement.querySelector('.alternating-cards');
     
    if (scrollOffset < window.innerHeight && scrollOffset > -this.element.nativeElement.offsetHeight) {
        
        container.classList.add('visible');
    }
  }

  constructor(private element: ElementRef) {}
}
