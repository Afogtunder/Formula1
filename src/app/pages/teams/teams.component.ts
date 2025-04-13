import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HoverColorDirective } from '../../directives/hover-teams/hover-color.directive';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

export interface Team {
  id: number;
  name: string;
  country: string;
  founded: string;
  teamPrincipal: string;
  headquarters: string;
  hoverColor: string;
  description: string;
  picture: string; // <-- Új mező a kép URL-hez
}


@Component({
  selector: 'app-teams',
  imports: [CommonModule, HoverColorDirective, MatCardModule, MatIconModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {
  teams: Team[] = [
    {
      id: 1,
      name: 'Mercedes',
      country: 'Germany',
      founded: '1954',
      teamPrincipal: 'Toto Wolff',
      headquarters: 'Brackley, United Kingdom',
      hoverColor: 'grey',
      description: 'Mercedes is a prominent Formula 1 team...',
      picture: 'images/mercedes.png'
    },
    {
      id: 2,
      name: 'Red Bull Racing',
      country: 'Austria',
      founded: '2005',
      teamPrincipal: 'Christian Horner',
      headquarters: 'Milton Keynes, United Kingdom',
      hoverColor: 'blue',
      description: 'Red Bull Racing quickly became one of the most successful teams...',
      picture: 'images/redbull.jpg'
    },
    {
      id: 3,
      name: 'Ferrari',
      country: 'Italy',
      founded: '1939',
      teamPrincipal: 'Mattia Binotto',
      headquarters: 'Maranello, Italy',
      hoverColor: 'red',
      description: 'Ferrari is one of the most iconic teams in F1 history...',
      picture: 'images/ferrari.png'
    },
    {
      id: 4,
      name: 'McLaren',
      country: 'United Kingdom',
      founded: '1963',
      teamPrincipal: 'Andrea Stella',
      headquarters: 'Woking, United Kingdom',
      hoverColor: 'orange',
      description: 'McLaren is a legendary F1 team with a long legacy, known for their innovation and past champions like Ayrton Senna and Lewis Hamilton.',
      picture: 'images/mclaren.jpg'
    },
    {
      id: 5,
      name: 'Aston Martin',
      country: 'United Kingdom',
      founded: '2021',
      teamPrincipal: 'Mike Krack',
      headquarters: 'Silverstone, United Kingdom',
      hoverColor: 'green',
      description: 'Aston Martin returned to F1 with a strong brand presence, aiming to build a competitive legacy.',
      picture: 'images/aston.jpg'
    },
    {
      id: 6,
      name: 'Alpine',
      country: 'France',
      founded: '2021',
      teamPrincipal: 'Bruno Famin',
      headquarters: 'Enstone, United Kingdom',
      hoverColor: 'lightblue',
      description: 'Alpine is Renault’s rebranded F1 effort, combining French engineering and motorsport heritage.',
      picture: 'images/alpine.png'
    },
    {
      id: 7,
      name: 'Kick Sauber',
      country: 'Switzerland',
      founded: '1993',
      teamPrincipal: 'Alessandro Alunni Bravi',
      headquarters: 'Hinwil, Switzerland',
      hoverColor: 'limegreen',
      description: 'Kick Sauber, formerly Alfa Romeo, is a Swiss-based team with a long-standing presence in F1. Now preparing for its future as the Audi works team.',
      picture: 'images/kick.png'
    },
    {
      id: 8,
      name: 'Williams Racing',
      country: 'United Kingdom',
      founded: '1977',
      teamPrincipal: 'James Vowles',
      headquarters: 'Grove, United Kingdom',
      hoverColor: 'royalblue',
      description: 'Williams Racing is one of the most successful teams in F1 history, known for its engineering excellence and championship legacy in the 80s and 90s.',
      picture: 'images/williams.jpg'
    },
    {
      id: 9,
      name: 'Visa Cash App RB',
      country: 'Italy',
      founded: '2006',
      teamPrincipal: 'Laurent Mekies',
      headquarters: 'Faenza, Italy',
      hoverColor: 'purple',
      description: 'Previously known as AlphaTauri, Visa Cash App RB serves as Red Bull’s sister team, focusing on developing young talent.',
      picture: 'images/visa.jpg'
    },
    {
      id: 10,
      name: 'Haas F1 Team',
      country: 'United States',
      founded: '2016',
      teamPrincipal: 'Ayao Komatsu',
      headquarters: 'Kannapolis, United States',
      hoverColor: 'black',
      description: 'Haas is the only American team in Formula 1, known for its close technical partnership with Ferrari and lean operational model.',
      picture: 'images/haas.png'
    }
  ];
}
