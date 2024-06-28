import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  public addTwoNumbers(a: number,b:number): number {
    return a + b;
  }

  public convertToTileCase(phrase: string): string {
    if (!phrase){
      return phrase;
    }
    return phrase.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
