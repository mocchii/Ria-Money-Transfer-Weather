import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DateWeather } from '../models/dateweather';
import { NextdayComponent } from './nextday/nextday.component';

@Component({
  selector: 'app-nextdays',
  standalone: true,
  imports: [CommonModule, NextdayComponent],
  templateUrl: './nextdays.component.html',
  styleUrls: ['./nextdays.component.css']
})
export class NextdaysComponent {
  @Input() DateWeather!: DateWeather[];
}
