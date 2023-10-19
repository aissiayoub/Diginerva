import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-card',
  templateUrl: './mini-card.component.html',
  styleUrls: ['./mini-card.component.scss']
})
export class MiniCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() pathImage = '';
  @Input() left = false;
  @Input() right = false;
}
