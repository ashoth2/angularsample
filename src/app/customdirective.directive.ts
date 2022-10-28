import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private el:ElementRef) { 
    el.nativeElement.style.color = "red"
  }

}
