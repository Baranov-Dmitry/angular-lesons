import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @Input('appStyle') color: string = 'blue'
  @Input() dStyle: {border?: string, borderRadius?: string, fontWeight?: string}

  @HostListener('style.color') elColor = null

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click', ['$event']) onClick(enent: Event) {
    console.log(event.target)
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color
    //this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    // this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyle.border)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyle.borderRadius)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyle.fontWeight)

  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null
    // this.renderer.setStyle(this.el.nativeElement, 'color', null)
    // this.renderer.setStyle(this.el.nativeElement, 'border', null)
    // this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
    // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
  }



}

