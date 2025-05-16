import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirthdateFormatPipe } from '../../pipes/birthdate-format.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HighlightDirective } from '../../directives/highlight/highlight.directive';
import { ChampionshipDirective } from '../../directives/championship/championship.directive';

export interface Driver {
  id: number;
  name: string;
  country: string;
  team: string;
  birthDate: string;
  championships: number;
  raceWins: number;
  podiums: number;
  points: number;
  careerStart: number;
  biography: string;
  picture: string;
}

@Component({
  selector: 'app-drivers',
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
    BirthdateFormatPipe,
    MatExpansionModule,
    HighlightDirective,
    ChampionshipDirective
  ],
  templateUrl: './drivers.component.html',
  styleUrl: './drivers.component.css'
})
export class DriversComponent {
  drivers: Driver[] = [
    {
      id: 1,
      name: 'Lewis Hamilton',
      country: 'United Kingdom',
      team: 'Mercedes',
      birthDate: '1985-01-07',
      championships: 7,
      raceWins: 103,
      podiums: 197,
      points: 4637.5,
      careerStart: 2007,
      biography: 'A Formula 1 történetének egyik legsikeresebb versenyzője, 7 világbajnoki címmel.',
      picture:'images/hamilton.avif',
    },
    {
      id: 2,
      name: 'Max Verstappen',
      country: 'Netherlands',
      team: 'Red Bull Racing',
      birthDate: '1997-09-30',
      championships: 3,
      raceWins: 60,
      podiums: 102,
      points: 2586.5,
      careerStart: 2015,
      biography: 'A legfiatalabb Formula 1-es versenyző, aki debütálásakor már pontot szerzett.',
      picture:'images/verstappen.avif',

    },
    {
      id: 3,
      name: 'Charles Leclerc',
      country: 'Monaco',
      team: 'Ferrari',
      birthDate: '1997-10-16',
      championships: 0,
      raceWins: 5,
      podiums: 34,
      points: 1134,
      careerStart: 2018,
      biography: 'A Ferrari csapatának fő versenyzője, több pole-pozícióval rendelkezik.',
      picture:'images/leclerc.avif',
    },
    {
      id: 4,
      name: 'Carlos Sainz',
      country: 'Spain',
      team: 'Ferrari',
      birthDate: '1994-09-01',
      championships: 0,
      raceWins: 3,
      podiums: 21,
      points: 1095.5,
      careerStart: 2015,
      biography: 'Tapasztalt spanyol versenyző, aki kiváló stratégiai végrehajtásairól ismert.',
      picture: 'images/sainz.avif',
    },
    {
      id: 5,
      name: 'George Russell',
      country: 'United Kingdom',
      team: 'Mercedes',
      birthDate: '1998-02-15',
      championships: 0,
      raceWins: 1,
      podiums: 11,
      points: 655,
      careerStart: 2019,
      biography: 'Fiatal brit tehetség, aki már első Mercedes-es évében lenyűgöző teljesítményt nyújtott.',
      picture: 'images/russel.avif',
    },
    {
      id: 6,
      name: 'Lando Norris',
      country: 'United Kingdom',
      team: 'McLaren',
      birthDate: '1999-11-13',
      championships: 0,
      raceWins: 0,
      podiums: 15,
      points: 789,
      careerStart: 2019,
      biography: 'Nagyratörő brit pilóta, aki a McLaren újjászületésében játszik kulcsszerepet.',
      picture: 'images/norris.avif',
    },
    {
      id: 7,
      name: 'Oscar Piastri',
      country: 'Australia',
      team: 'McLaren',
      birthDate: '2001-04-06',
      championships: 0,
      raceWins: 0,
      podiums: 2,
      points: 205,
      careerStart: 2023,
      biography: 'Fiatal ausztrál csoda, aki már debütáló évében lenyűgöző teljesítményt nyújtott.',
      picture: 'images/piastri.avif',
    },
    {
      id: 8,
      name: 'Fernando Alonso',
      country: 'Spain',
      team: 'Aston Martin',
      birthDate: '1981-07-29',
      championships: 2,
      raceWins: 32,
      podiums: 106,
      points: 2347,
      careerStart: 2001,
      biography: 'A tapasztalat megtestesítője, aki 40+ évesen is a csúcson versenyez.',
      picture: 'images/alonso.avif',
    },
    {
      id: 9,
      name: 'Sergio Pérez',
      country: 'Mexico',
      team: 'Red Bull Racing',
      birthDate: '1990-01-26',
      championships: 0,
      raceWins: 6,
      podiums: 39,
      points: 1564,
      careerStart: 2011,
      biography: '"Checo" néven ismert mexikói pilóta, kiváló versenystratégiai érzékkel.',
      picture: 'images/perez.avif',
    },
    {
      id: 10,
      name: 'Lance Stroll',
      country: 'Canada',
      team: 'Aston Martin',
      birthDate: '1998-10-29',
      championships: 0,
      raceWins: 0,
      podiums: 3,
      points: 276,
      careerStart: 2017,
      biography: 'A csapat tulajdonosának fia, néha lenyűgöző gyorsasággal.',
      picture: 'images/stroll.avif',
    },
  ];

}