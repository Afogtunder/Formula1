import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  email = new FormControl('');
  password = new FormControl('');
  isLoading: boolean = false;
  loginError: string = '';
  showLoginForm: boolean = true;
  authSubscription?: Subscription;

  constructor(
    private authService: AuthService, 
    private router: Router,
  ) {}

  login() {
    if (this.email.invalid) {
      this.loginError = 'Please enter a valid email address';
      return;
    }

    if (this.password.invalid) {
      this.loginError = 'Password must be at least 6 characters long';
      return;
    }

    const emailValue = this.email.value || '';
    const passwordValue = this.password.value || '';
    
    this.isLoading = true;
    this.showLoginForm = false;
    this.loginError = '';

    this.authService.signIn(emailValue, passwordValue)
    .then(userCredential => {
      console.log('Login successful:', userCredential.user);
      this.router.navigateByUrl('/home');
    })
    .catch(error => {
      console.error('Login error:', error);
      this.isLoading = false;
      this.showLoginForm = true;
  
      switch (error.code) {
        case 'auth/user-not-found':
          this.loginError = 'No account found with this email address';
          break;
        case 'auth/wrong-password':
          this.loginError = 'Incorrect password';
          break;
        default:
          this.loginError = 'Authentication failed. Please try again later.';
      }
    });
  }

  ngOnDestroy() {
    this.authSubscription?.unsubscribe(); // Leiratkozás a subscription-ről, hogy elkerüljük a memória szivárgást
  }
}
