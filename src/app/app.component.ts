import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { TracksComponent } from './pages/tracks/tracks.component';
import { TrackLengthDirective } from './directives/track-lengths/track-lengths.directive';
import { HoverColorDirective } from './directives/hover-teams/hover-color.directive';
import { BirthdateFormatPipe } from './pipes/birthdate-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,FooterComponent,CommonModule,
    MatCardModule, MatListModule, MatDividerModule, MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'f1';
  isLoggedIn = false;
  page="home"

  changePage(selectedPage: string){
    this.page = selectedPage;
  }

  ngOnInit(): void {
    this.checkLoginStatus();
  }
  checkLoginStatus(): void {
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  logout(): void {
    localStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = false;
    window.location.href = '/home';
  }
}
