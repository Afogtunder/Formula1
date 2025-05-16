import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('appHighlight') raceWins: number = 0;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.applyHighlight();
  }

  private applyHighlight(): void {
    if (this.raceWins > 50) {
      this.el.nativeElement.style.backgroundColor = '#FFD700'; // Arany
    } else if (this.raceWins >= 10) {
      this.el.nativeElement.style.backgroundColor = '#C0C0C0'; // Ezüst
    } else {
      this.el.nativeElement.style.backgroundColor = '#CD7F32'; // Bronz
    }
    this.el.nativeElement.style.color = '#fff'; // Fehér szöveg
    this.el.nativeElement.style.borderRadius = '4px';
    this.el.nativeElement.style.padding = '5px';
  }
}
