import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], ...args: unknown[]): any[] {
    let newElem:any = [""];

    if (!value) {
      return [""];
    }
    else{
      for (let i = 0; i < newElem.length; i++) {
        newElem[i] = value;
      }
    }

    return newElem;
  }

}
