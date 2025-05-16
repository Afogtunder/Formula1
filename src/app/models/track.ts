export interface Track {
  id: number;           // Egyedi azonosító
  name: string;         // Pálya neve
  location: string;     // Pálya helyszíne (pl. város, ország)
  length: number;       // Pálya hossza (km-ben)
  layout: string;       // Pálya elrendezése (pl. "kanyargós", "gyors")
  established: number;  // Pálya alapításának éve
  country: string;      // Pálya országának neve
}