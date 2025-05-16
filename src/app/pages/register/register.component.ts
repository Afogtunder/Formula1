import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'  
})
export class RegisterComponent {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rePassword: new FormControl('', [Validators.required]),
    name: new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)])
    })
  });

  isLoading = false;
  showForm = true;
  signupError = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  signup(): void {
    // Validációs ellenőrzés
    if (this.signUpForm.invalid) {
      this.signupError = 'Please correct any errors on the form before submitting.';
      return;
    }

    const password = this.signUpForm.get('password')?.value;
    const rePassword = this.signUpForm.get('rePassword')?.value;

    if (password !== rePassword) {
      this.signupError = 'The passwords do not match.';
      return;
    }

    this.isLoading = true;
    this.showForm = false;

    const userData: User = {
      name: {
        firstname: this.signUpForm.value.name?.firstname || '',
        lastname: this.signUpForm.value.name?.lastname || ''
      },
      email: this.signUpForm.value.email || '',
      password: this.signUpForm.value.password || ''  // Jelszó mentése a felhasználói adatokban
    };

    const email = this.signUpForm.value.email || '';
    const pw = this.signUpForm.value.password || '';

    this.authService.signUp(email, pw, userData)
      .then(userCredential => {
        console.log('Registration successful:', userCredential.user);
        this.router.navigateByUrl('/home');
      })
      .catch(error => {
        console.error('Registration error:', error);
        this.isLoading = false;
        this.showForm = true;

        // Részletes hibakezelés a Firebase hibakódok alapján
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.signupError = 'This email is already in use.';
            break;
          case 'auth/invalid-email':
            this.signupError = 'The email address is badly formatted.';
            break;
          case 'auth/weak-password':
            this.signupError = 'The password is too weak. Please use at least 6 characters.';
            break;
          default:
            this.signupError = 'An error occurred during registration. Please try again later.';
        }
      });
  }
}
