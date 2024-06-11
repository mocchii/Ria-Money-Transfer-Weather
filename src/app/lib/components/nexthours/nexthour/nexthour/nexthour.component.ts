import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { List } from '@lib/components/models/weather';
import { SharingModule } from 'src/app/sharingmodule';

@Component({
  selector: 'app-nexthour',
  standalone: true,
  imports: [CommonModule, SharingModule],
  templateUrl: './nexthour.component.html',
  styleUrls: ['./nexthour.component.css'],
  host: {'class': 'customClass'}
})
export class NexthourComponent {
  @Input() WeatherList!: List;
}
