import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-feast-unit-testing',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './feast-unit-testing.component.html',
  styleUrl: './feast-unit-testing.component.css'
})
export class FeastUnitTestingComponent {
  isOn = false;
  btnText = 'Subscribe';
  isSubscribed = false;


  submit(): void {
    this.isOn = !this.isOn;
    console.log(1);
  }
  get message(): string {
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  subscribe(): void {
    this.isSubscribed = true;
    this.btnText = 'Subscribed';
  }
}
