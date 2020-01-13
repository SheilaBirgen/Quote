import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
 
  // transform(value: any): number {
  //   let today:Date = new Date();
  //   let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  //   var dateDiff = Math.abs(value - todayWithNoTime);
  //   const secondsInDay = 86400;
  //   var dateDiffSec = dateDiff*0.001;
  //   var dateCounter = dateDiffSec/secondsInDay;

  //   if (dateCounter >= 1 && value > todayWithNoTime) {
  //     return dateCounter;
  //   } else {
  //     return 0;
  //   }
    
  // }

  transform(value: any, ...args: any[]): any {
    return null;
  }

}