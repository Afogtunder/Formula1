export interface Comment {
  id: number;
  writer: string;
  content: string;
}

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Verstappen újabb győzelmet aratott Imolában',
    content: 'Max Verstappen domináns teljesítményt nyújtott az Emilia-Romagna Nagydíjon, ezzel tovább növelte előnyét az összetettben.',
    comments: [
      { id: 1, writer: 'F1Fan88', content: 'Micsoda verseny! Verstappen megállíthatatlan.' },
      { id: 2, writer: 'Speedy', content: 'Remek stratégia a Red Bulltól.' }
    ]
  },
  {
    id: 2,
    title: 'Mercedes fejlesztéseket hoz Monacóra',
    content: 'A Mercedes csapat több új aerodinamikai elemet is pályára visz a monacói hétvégére. Vajon elég lesz-e a Ferrari és Red Bull ellen?',
    comments: [
      { id: 1, writer: 'SilverArrow', content: 'Végre valami előrelépés, remélem működni fog!' }
    ]
  },
  {
    id: 3,
    title: 'Ferrari új szerződést ajánlott Leclerc-nek',
    content: 'Charles Leclerc hosszabbítás előtt állhat, miután a Ferrari vezetősége jelezte, szeretnék hosszú távon megtartani őt.',
    comments: [
      { id: 1, writer: 'TifosiForever', content: 'Leclerc hűsége lenyűgöző!' },
      { id: 2, writer: 'RacingMind', content: 'Csak adják alá a megfelelő autót végre...' }
    ]
  },
  {
    id: 4,
    title: 'Alonso még nem gondol a visszavonulásra',
    content: 'Fernando Alonso kijelentette, hogy még nem tervezi a visszavonulást, és továbbra is élvezi a versenyzést az Aston Martinnál.',
    comments: [
      { id: 1, writer: 'OldSchoolRacer', content: 'Imádom, hogy még mindig ennyire motivált!' }
    ]
  },
  {
    id: 5,
    title: 'Új sprintformátum jöhet 2025-től',
    content: 'Az F1 vezetősége egy új sprintverseny-formátumot fontolgat, amely még több izgalmat hozhat a hétvégékre.',
    comments: [
      { id: 1, writer: 'RaceFanatic', content: 'Remélem jobban átgondolják, mint az előző verziót.' },
      { id: 2, writer: 'GridGuru', content: 'Több akció = több szórakozás!' }
    ]
  }
  
];
