import { Weather } from "./weather";

export class DateWeather{
    constructor(date: string, lowTemp: number, highTemp:number, weather: Weather){
        this.date = date;
        this.lowTemp = lowTemp;
        this.highTemp = highTemp;
        this.weather = weather;
    }
    public date!: string;
    public lowTemp!: number;
    public highTemp!: number;
    public weather!: Weather;
}