import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'CanFly'
})

export class CanFlyPipe implements PipeTransform {

  transform(value:boolean): 'vuela'|'no vuela' {
    return (value) ? 'vuela' : 'no vuela';
  }
}
