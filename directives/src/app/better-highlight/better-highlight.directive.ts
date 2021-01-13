import { style } from '@angular/animations';
import { Directive, Renderer2, ElementRef, OnInit, HostListener,HostBinding, Input } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

@Input() defaultColor:string='transparent';
@Input() highlightColor:string='blue';

@HostBinding('style.backgroundColor') backgroundColor:string= this.highlightColor;
@HostBinding('style.color') color: string;

// backgroundColor has been named as style.backgroundColor 
  
  constructor(private eleRef: ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    this.backgroundColor=this.defaultColor;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');

  }



  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'white');
    this.backgroundColor= this.highlightColor;
    this.color='white';
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.eleRef.nativeElement, 'color', 'green');
    this.backgroundColor=this.defaultColor;
    this.color='deeppink';

  }
}

