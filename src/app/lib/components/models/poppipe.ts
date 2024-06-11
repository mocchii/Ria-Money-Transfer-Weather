import { Pipe } from '@angular/core';

@Pipe({ name: 'poppipe' })
export class PopPipe {
    transform(val : number) : string {
        return (val * 100).toFixed(2) + ' %';
     }
}