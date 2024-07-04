import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FeastUnitTestingComponent} from './components/feast-unit-testing/feast-unit-testing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FeastUnitTestingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Testing';
}
