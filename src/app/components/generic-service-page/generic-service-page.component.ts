import { Component } from '@angular/core';
import securityData from '../../../assets/data/security-data.json';

@Component({
  selector: 'app-generic-service-page',
  templateUrl: './generic-service-page.component.html',
  styleUrls: ['./generic-service-page.component.scss']
})
export class GenericServicePageComponent {
     securityDataItems = securityData;
}
