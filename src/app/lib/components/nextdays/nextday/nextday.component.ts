import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DateWeather } from '@lib/components/models/dateweather';
import { SharingModule } from 'src/app/sharingmodule';

@Component({
  selector: 'app-nextday',
  standalone: true,
  imports: [CommonModule, SharingModule],
  templateUrl: './nextday.component.html',
  styleUrls: ['./nextday.component.css']
})
export class NextdayComponent {
  @Input() DateWeather!: DateWeather;
}
