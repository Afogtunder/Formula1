import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, MatListModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @Input() sidenav!: MatSidenav;
  @Output() logoutEvent = new EventEmitter<void>();

  isLoggedIn: boolean = false;

  constructor() {
    console.log("constructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
    // Ellenőrzi, hogy be van-e jelentkezve
    this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }

  closeMenu() {
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = '/home';
    this.closeMenu();
  }
}
