import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent {
  @Input() imagePath = '';
  @Input() title = '';
  @Input() description = '';
}
