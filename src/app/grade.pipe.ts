import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade',
  standalone: true
})
export class GradePipe implements PipeTransform {

  transform(value: any, ...args: any[]): unknown {
    let grade = '';
    if(value >= 90) {
        grade = 'A';
    } else if(value < 90 && value >= 80) {
        grade = 'B';
    } else if(value < 35) {
        grade = 'FAIL';
    }
    return grade;
  }
}