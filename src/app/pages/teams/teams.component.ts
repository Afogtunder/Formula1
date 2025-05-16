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
      description: 'A Mercedes egy kiemelkedő Forma-1-es csapat, amely számos világbajnoki címet nyert az évek során, és az egyik legerősebb csapat a sportág történetében.',
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
      description: 'A Red Bull Racing gyorsan az egyik legsikeresebb csapattá vált, és az egyik legdinamikusabb csapat az F1-es versenyeken.',
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
      description: 'A Ferrari az egyik legismertebb és legikonikusabb csapat a Forma-1 történetében, sok világbajnoki címet szerzett és hűséges rajongótáborral rendelkezik.',
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
      description: 'A McLaren egy legendás Forma-1-es csapat, amely hosszú múltra tekint vissza, és olyan bajnokokat nevelt, mint Ayrton Senna és Lewis Hamilton.',
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
      description: 'Az Aston Martin 2021-ben tért vissza a Forma-1-be, és erőteljes márkájával próbál tartós versenyképességet építeni a sportágban.',
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
      description: 'Az Alpine a Renault Forma-1-es ágazata, amely a francia mérnöki tudást és motorsport örökséget ötvözi.',
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
      description: 'A Kick Sauber, korábban Alfa Romeo, egy svájci székhelyű csapat, amely hosszú távú jelenléttel bír a Forma-1-ben, és most készül a jövőre, mint az Audi hivatalos csapata.',
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
      description: 'A Williams Racing a Forma-1 egyik legsikeresebb csapata, amely az 1980-as és 1990-es években mérnöki kiválóságáról és bajnoki örökségéről volt híres.',
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
      description: 'A Visa Cash App RB, korábban AlphaTauri, a Red Bull testvércsapata, amely a fiatal tehetségek fejlesztésére összpontosít.',
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
      description: 'A Haas az egyetlen amerikai csapat a Forma-1-ben, amely közvetlen technikai partnerséget ápol a Ferrarival, és karcsú operációs modellel dolgozik.',
      picture: 'images/haas.png'
    }
  ];
}
