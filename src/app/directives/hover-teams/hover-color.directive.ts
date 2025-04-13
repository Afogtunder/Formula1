import { Directive, ElementRef, Input, Renderer2, HostListener } from '@angular/core';
import { Team } from '../../pages/teams/teams.component';

@Directive({
  selector: '[appHoverColor]'
})
export class HoverColorDirective {
  @Input() appHoverColor: Team | undefined; // A Team objektumot várjuk

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHoverColor && this.appHoverColor.hoverColor) {
      // Beállítjuk a hover színt, ha van hoverColor
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.appHoverColor.hoverColor);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    // Visszaállítjuk az alap színt, amikor elhagyjuk a területet
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
