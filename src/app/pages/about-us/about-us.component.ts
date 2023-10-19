import { Component } from '@angular/core';
import { miniCardTeam } from '../../models/miniCardTeam';
import MiniTeamData from '../../../assets/data/team-data.json';
import valuesData from '../../../assets/data/values-data.json';
import { Value } from 'src/app/models/value.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  miniTeam: miniCardTeam[] = MiniTeamData;
  values: Value[] = valuesData;

}
