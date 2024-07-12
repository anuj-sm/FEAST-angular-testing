import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-info',
  standalone: true,
	imports: [
		RouterLink
	],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  constructor(private router: Router) {
  }

  public goBack(): void {
    this.router.navigate(['/home']);
  }
}
