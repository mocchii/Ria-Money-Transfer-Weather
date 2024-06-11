import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RootWeather } from '../models/weather';
import { NexthourComponent } from './nexthour/nexthour/nexthour.component';

@Component({
  selector: 'app-nexthours',
  standalone: true,
  imports: [CommonModule, NexthourComponent],
  templateUrl: './nexthours.component.html',
  styleUrls: ['./nexthours.component.css']
})
export class NexthoursComponent {
@Input() RootWeather!: RootWeather;
}
