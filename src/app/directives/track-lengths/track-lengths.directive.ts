import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appTrackLength]'
})
export class TrackLengthDirective implements OnInit {
  @Input() trackLength: number = 0;  // Alapértelmezett érték a hiba elkerülésére
  @Input() maxLength: number = 7;    // Alapértelmezett maximális hossza a pályának

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Ellenőrizzük, hogy a trackLength és maxLength számok-e
    if (isNaN(this.trackLength) || isNaN(this.maxLength)) {
      console.error('A pálya hossza vagy a maximális hossz nem szám!');
      return;
    }

    // A pálya hosszának skálázása, hogy 100%-os legyen a maxLength értékére
    const scale = (this.trackLength / this.maxLength) * 100;

    // Hozzáadunk egy színes sávot a pálya hosszának megjelenítésére
    const trackLengthBar = this.renderer.createElement('div');
    this.renderer.setStyle(trackLengthBar, 'height', '10px');
    this.renderer.setStyle(trackLengthBar, 'background-color', '#4CAF50');  // Zöld szín
    this.renderer.setStyle(trackLengthBar, 'width', `${scale}%`);
    this.renderer.setStyle(trackLengthBar, 'border-radius', '5px');

    // A skálázott sávot hozzáadjuk a DOM-hoz
    this.renderer.appendChild(this.el.nativeElement, trackLengthBar);
  }
}
