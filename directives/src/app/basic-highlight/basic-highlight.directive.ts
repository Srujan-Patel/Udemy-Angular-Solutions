import { ElementRef, OnInit } from '@angular/core';
import {Directive} from '@angular/core'

@Directive({
    selector: '[appBasicHighlight]'
})
export class basicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef){
    }

    ngOnInit(){
this.elementRef.nativeElement.style.backgroundColor='green';
this.elementRef.nativeElement.style.color='white'
}

}