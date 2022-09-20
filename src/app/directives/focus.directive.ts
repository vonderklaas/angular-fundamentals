import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective implements OnInit {
  constructor(private el: ElementRef) {}
  // el <- access to element to which this directory is binded

  ngOnInit(): void {
    this.el.nativeElement.focus();
  }
}
