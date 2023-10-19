import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  langUser :any;
  constructor(private translate: TranslateService) {
    this.langUser = this.translate.getBrowserLang();
    this.translate.setDefaultLang(this.langUser);
    this.translate.use(this.langUser);
  }
}
