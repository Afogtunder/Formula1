import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackLengthDirective } from '../../directives/track-lengths/track-lengths.directive';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

export interface Track {
  id: number;           // Egyedi azonosító
  name: string;         // Pálya neve
  location: string;     // Pálya helyszíne (pl. város, ország)
  length: number;       // Pálya hossza (km-ben)
  layout: string;       // Pálya elrendezése (pl. "kanyargós", "gyors")
  established: number;  // Pálya alapításának éve
  country: string;      // Pálya országának neve
}

@Component({
  selector: 'app-tracks',
  imports: [CommonModule,TrackLengthDirective, MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatIconModule,],
  templateUrl: './tracks.component.html',
  styleUrl: './tracks.component.css'
})
export class TracksComponent {
  tracks: Track[] = [
    {
      id: 1,
      name: 'Circuit de Monaco',
      location: 'Monte Carlo, Monaco',
      length: 3.337,
      layout: 'kanyargós',
      established: 1929,
      country: 'Monaco',
    },
    {
      id: 2,
      name: 'Silverstone Circuit',
      location: 'Silverstone, United Kingdom',
      length: 5.891,
      layout: 'gyors',
      established: 1950,
      country: 'United Kingdom',
    },
    {
      id: 3,
      name: 'Spa-Francorchamps',
      location: 'Stavelot, Belgium',
      length: 7.004,
      layout: 'kanyargós',
      established: 1921,
      country: 'Belgium',
    },
    {
      id: 4,
      name: 'Circuit de Spa-Francorchamps',
      location: 'Belgium, Spa',
      length: 7.004,
      layout: 'gyors és kanyargós',
      established: 1921,
      country: 'Belgium',
    },
    {
      id: 5,
      name: 'Monza Circuit',
      location: 'Monza, Italy',
      length: 5.793,
      layout: 'gyors',
      established: 1922,
      country: 'Italy',
    },
    {
      id: 6,
      name: 'Suzuka International Racing Course',
      location: 'Suzuka, Japan',
      length: 5.807,
      layout: 'technikás és gyors',
      established: 1962,
      country: 'Japan',
    },
    {
      id: 7,
      name: 'Circuit of the Americas',
      location: 'Austin, United States',
      length: 5.513,
      layout: 'modern és kanyargós',
      established: 2012,
      country: 'United States',
    },
    {
      id: 8,
      name: 'Interlagos (Autódromo José Carlos Pace)',
      location: 'São Paulo, Brazil',
      length: 4.309,
      layout: 'kanyargós és technikás',
      established: 1940,
      country: 'Brazil',
    },
    {
      id: 9,
      name: 'Hungaroring',
      location: 'Mogyoród, Hungary',
      length: 4.381,
      layout: 'szűk és technikás',
      established: 1986,
      country: 'Hungary',
    },
    {
      id: 10,
      name: 'Red Bull Ring',
      location: 'Spielberg, Austria',
      length: 4.318,
      layout: 'gyors és rövid',
      established: 1969,
      country: 'Austria',
    },
    {
      id: 11,
      name: 'Bahrain International Circuit',
      location: 'Sakhir, Bahrain',
      length: 5.412,
      layout: 'gyors és nyitott',
      established: 2004,
      country: 'Bahrain',
    },
    {
      id: 12,
      name: 'Yas Marina Circuit',
      location: 'Abu Dhabi, United Arab Emirates',
      length: 5.281,
      layout: 'modern és technikás',
      established: 2009,
      country: 'United Arab Emirates',
    },
    {
      id: 13,
      name: 'Marina Bay Street Circuit',
      location: 'Singapore',
      length: 5.063,
      layout: 'utcai és kanyargós',
      established: 2008,
      country: 'Singapore',
    },
    {
      id: 14,
      name: 'Zandvoort Circuit',
      location: 'Zandvoort, Netherlands',
      length: 4.259,
      layout: 'kanyargós és szűk',
      established: 1948,
      country: 'Netherlands',
    },
    {
      id: 15,
      name: 'Jeddah Street Circuit',
      location: 'Jeddah, Saudi Arabia',
      length: 6.174,
      layout: 'gyors utcai',
      established: 2021,
      country: 'Saudi Arabia',
    }    
  ];
}
