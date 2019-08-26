import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultValue: string = "yellow";
  @Input("appBetterHighlight") highLightColor: string = "red";

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding("style.backgroundColor") backgroundColor: string = this.defaultValue;

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgray')
  }

  @HostListener('mouseenter') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'lightgray');
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultValue;
  }

}
