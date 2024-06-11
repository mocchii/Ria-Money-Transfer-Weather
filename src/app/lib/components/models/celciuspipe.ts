import { Pipe } from '@angular/core';

@Pipe({ name: 'celciuspipe' })
export class CelciusPipe {
    transform(val : number) : string {
        return (val - 273.15).toFixed(2) + ' °C';
     }
}