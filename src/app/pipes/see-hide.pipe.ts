import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeHide'
})
export class SeeHidePipe implements PipeTransform {

  transform(value: boolean): any {
    if (value === false) {
      return "Voir ";
    } else {
      return "Cacher ";
    }
  }

}
