import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedService: SharedService) { }

  multiply(a: number, b: number) {
    this.sharedService.mysharedService();
    return a * b;
  }

  add(a: number, b: number) {
    this.sharedService.mysharedService();
    return a + b;
  }
}
