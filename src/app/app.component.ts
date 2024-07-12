import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GradePipe } from './grade.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, GradePipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'feast-test';
  isSubscribed = false;
  btnText = 'Subscribe';
  marks = [90, 87, 33]

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
    }, 3000)
  }
}
