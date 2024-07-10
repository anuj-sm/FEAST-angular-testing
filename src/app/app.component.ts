import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'feast-test';
  isSubscribed = false;
  btnText = 'Subscribe';

  subscribe() {
    setTimeout(() => {
      this.isSubscribed = true;
    }, 3000)
  }
}
