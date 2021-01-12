import { Component, OnInit,Input, ViewEncapsulation, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

@Input('srvElement') element:{type: string, name: string, content: string};  
@ContentChild('contentParagraph') paragraph: ElementRef;
constructor() { }

// srvElement is an alias name for element

  ngOnInit(): void {
  }

  
}

