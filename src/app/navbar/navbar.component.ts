import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  // standalone: true,
  // imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // isLoggedIn = false;

	constructor(public authService: AuthenticationService) {}

	logout() {
		this.authService.logout();
    // this.isLoggedIn = false;
	}
}
