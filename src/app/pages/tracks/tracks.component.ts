import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackLengthDirective } from '../../directives/track-lengths/track-lengths.directive';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';
import { Track } from '../../models/track';

@Component({
  selector: 'app-tracks',
  standalone: true,
  imports: [
    CommonModule,
    TrackLengthDirective,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit, OnDestroy {
  tracks: Track[] = [];
  private subscription = new Subscription();

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.loadAllTracks();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loadAllTracks(): void {
    this.subscription.unsubscribe();
    this.subscription = this.trackService.getAllTracks().subscribe(data => {
      this.tracks = data;
    });
  }

  filterByLength(): void {
    this.subscription.unsubscribe();
    this.subscription = this.trackService.getTracksByLength(5).subscribe(data => {
      this.tracks = data;
    });
  }

  filterByEstablished(): void {
    this.subscription.unsubscribe();
    this.subscription = this.trackService.getTracksByEstablishedYear(2000).subscribe(data => {
      this.tracks = data;
    });
  }

  // Új lekérdezés: Pályák növekvő hosszúság szerint
  filterByLengthAscending(): void {
    this.subscription.unsubscribe();
    this.subscription = this.trackService.getTracksOrderedByLengthAscending().subscribe(data => {
      this.tracks = data;
    });
  }

  // Új lekérdezés: Az első 5 alapított pálya
  filterFirstFiveEstablished(): void {
    this.subscription.unsubscribe();
    this.subscription = this.trackService.getFirstFiveTracksByEstablishedYear().subscribe(data => {
      this.tracks = data;
    });
  }
}
