import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-security-info-card',
  templateUrl: './security-info-card.component.html',
  styleUrls: ['./security-info-card.component.scss']
})
export class SecurityInfoCardComponent {
  @Input() title = '';
  @Input() paragraph1 = '';
  @Input() paragraph2 = '';
  @Input() underlineWord = '';
  @Input() iconPath = '';
  @Input() backgroundClass = 'background';

  highlightSpecificWord(text: string,underlineWord: string): string {
    const regex = new RegExp(`\\b${underlineWord}\\b`, 'gi');
    return text.replace(regex, `<u class="underline">$&</u>`);
  }
  
}
