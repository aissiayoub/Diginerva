import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-mini-team-card',
  templateUrl: './mini-team-card.component.html',
  styleUrls: ['./mini-team-card.component.scss']
})
export class MiniTeamCardComponent  {
  @Input() team_name = '';
  @Input() job = '';
  @Input() pathImage = '';
  
}
