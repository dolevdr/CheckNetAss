import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toHebrew',
})
export class ToHebrewPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    let week: any = {
      0: 'יום ראשון,',
      1: 'יום שני,',
      2: 'יום שלישי,',
      3: 'יום רביעי,',
      4: 'יום חמישי,',
      5: 'יום שישי,',
      6: 'יום שבת,',
    };
    let monthNames: any = {
      0: 'ינואר',
      1: 'פברואר',
      2: 'מרץ',
      3: 'אפריל',
      4: 'מאי',
      5: 'יוני',
      6: 'יולי',
      7: 'אוגוסט',
      8: 'ספטמבר',
      9: 'אוקטובר',
      10: 'נובמבר',
      11: 'דצמבר',
    };
    let toDate = new Date(value);
    let res = `מ${week[toDate.getDay()]} ${toDate.getDate()} ל ${
      monthNames[toDate.getMonth()]
    } ${toDate.getFullYear()}`;
    return res;
  }
}
