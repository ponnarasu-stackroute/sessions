import { Directive,HostBinding,Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appPinned]'
})
export class PinnedDirective  implements OnInit{

  @Input() appPinned:boolean;

  @HostBinding('style.background-color') bgClr:string;
  constructor() { }

  ngOnInit(){
   if(this.appPinned){
     this.bgClr = "green";
   }
  }
}
