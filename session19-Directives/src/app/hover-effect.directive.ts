import { Directive,ElementRef,Renderer2,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {

  constructor(private ele: ElementRef, private renderer: Renderer2) {
   // this.renderer.setStyle(this.ele.nativeElement,"background-color","lightgreen");
   }
   @HostBinding('style.background-color') bgClr:string;

   @HostListener('mouseenter') onmouseenter(){
 //   this.renderer.setStyle(this.ele.nativeElement,"background-color","lightgreen");
      this.bgClr = "pink";
   }

   @HostListener('mouseleave') onmouseleave(){
     //this.renderer.removeStyle(this.ele.nativeElement,"background-color");
     this.bgClr = null;
   }
}
