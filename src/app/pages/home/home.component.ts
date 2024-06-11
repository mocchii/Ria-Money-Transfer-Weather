import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DateWeather } from '@lib/components/models/dateweather';
import { List, RootWeather, Weather } from '@lib/components/models/weather';
import { NextdaysComponent } from '@lib/components/nextdays/nextdays.component';
import { NexthoursComponent } from '@lib/components/nexthours/nexthours.component';
import { HttpWeatherService } from '@lib/services/service/apiservice';
import { AppTheme, ThemeService } from '@lib/services/theme';
import { Subject } from 'rxjs';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule, NexthoursComponent, NextdaysComponent],
    templateUrl: './home.component.html',
    providers: [HttpWeatherService],
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    currentTheme!: AppTheme | null;

    private readonly _themeService = inject(ThemeService);

    private readonly _destroy$ = new Subject();
    public weatherData: RootWeather = new RootWeather;
    public reduceWeatherData: DateWeather[] = [];

    constructor(private service: HttpWeatherService){
    }
    ngOnInit(): void {
        this.handleWeatherCall(22.9068,43.1729);
    }

    ngOnDestroy(): void {
        this._destroy$.complete();
        this._destroy$.unsubscribe();
    }

    handleWeatherCall(lat: number, lon: number){
        this.service.getWeatherForecast(lat,lon).subscribe(res => {
            this.weatherData = res;
            this.processWeatherCall();
        });
        
    }

    processWeatherCall(){
        let groups = this.weatherData.list.reduce((map, el) => {
            const dateKey = new Date(el.dt_txt).toLocaleDateString('en');
            map.set(dateKey, map.get(dateKey) ? map.get(dateKey).concat(el) : [el]);
          
            return map;
          }, new Map());
          this.reduceWeatherData = [];
          for (const [key, value] of groups.entries()) {
            let maxTempValue = Number.MIN_SAFE_INTEGER;
            let minTempValue = Number.MAX_SAFE_INTEGER;
            let maxCloudValue:number = 0;
            let maxCloud:Weather = new Weather;
            value.map((el: List) => {
                const valueMaxObject = el.main.temp_max;
                const valueMinObject = el.main.temp_min;
                const valueCloudObject = el.weather[0].id ?? 0;
                maxTempValue = Math.max(maxTempValue, valueMaxObject);
                minTempValue = Math.min(minTempValue, valueMinObject);
                maxCloudValue = Math.max(maxCloudValue, valueCloudObject);
                if(el.weather[0].id == maxCloudValue){
                    maxCloud = el.weather[0];
                }
              });
            this.reduceWeatherData.push(new DateWeather(key,minTempValue,maxTempValue,maxCloud));
          }
    }
    
}
