import { Component } from '@angular/core';
import ContactInfosData from '../../../assets/data/contact-infos.json';
import InterestOptions from '../../../assets/data/items-contact.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactInfos = ContactInfosData;
  InterestItems = InterestOptions;

}
