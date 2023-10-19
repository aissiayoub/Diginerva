import { Component } from '@angular/core';
import HeroStrategyData from '../../../../assets/data/discover-strategy.json';

@Component({
  selector: 'app-hero-our-strategy',
  templateUrl: './hero-our-strategy.component.html',
  styleUrls: ['./hero-our-strategy.component.scss']
})
export class HeroOurStrategyComponent {
  cards = HeroStrategyData ;

}
