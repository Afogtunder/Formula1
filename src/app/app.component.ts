import { Component, NgZone } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AuthService } from '../app/services/auth.service';  // Az AuthService importálása


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule,
    MatCardModule, MatListModule, MatDividerModule, MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Itt javítottam az "styleUrl" helyett "styleUrls"-ra
})
export class AppComponent {
  title = 'f1';
  page = "home";
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private ngZone: NgZone) {}

  changePage(selectedPage: string): void {
    this.page = selectedPage;
  }

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  logout(): void {
    this.authService.signOut();  // A kijelentkezés a szolgáltatásban történik
    this.ngZone.run(() => {
      window.location.href = '/home';  // Navigálás a megfelelő oldalra
    });
  }
}
