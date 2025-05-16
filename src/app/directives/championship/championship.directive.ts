import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChampionship]'
})
export class ChampionshipDirective implements OnInit {
  @Input() appChampionship: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    let bgColor = '';
    if (this.appChampionship === 0) {
      bgColor = 'red';
    } else if (this.appChampionship >= 1 && this.appChampionship <= 2) {
      bgColor = 'orange';
    } else if (this.appChampionship >= 3 && this.appChampionship <= 5) {
      bgColor = 'blue';
    } else if (this.appChampionship > 5) {
      bgColor = 'green';
    }
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', bgColor);
  }
}