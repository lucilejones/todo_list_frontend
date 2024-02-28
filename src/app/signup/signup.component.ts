import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
	user = {
		username: '',
		password: '',
		password_confirmation: '',
	};

	constructor(private authService: AuthenticationService, private router: Router) {}

	onSubmit() {
		if (this.user.password === this.user.password_confirmation) {
			this.authService.signUp(this.user).subscribe({
				next: (res: any) => {
					console.log('Sign up successful', res);
					// Redirect to login or another page
					this.router.navigate(['/login']);
				},
				error: (error: any) => {
					console.error('Sign up failed', error);
					// Handle error (e.g., show error message)
				},
			});
		} else {
			console.error('Passwords do not match');
			// Handle password mismatch (e.g., show error message)
		}
	}
}
