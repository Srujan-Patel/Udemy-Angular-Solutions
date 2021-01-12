import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

// bpCreated is an alias
export class CockpitComponent implements OnInit {

 @Output() serverCreated= new EventEmitter<{serverName:string, serverContent:string}>();
@Output('bpCreated') blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
@ViewChild('serverContent', {static:true}) serverContentInput: ElementRef;



  constructor() { }

  ngOnInit(): void {
  }


  onAddServer(inputName) {
    console.log(this.serverContentInput);
  // console.log(inputName.value);
   this.serverCreated.emit({
    serverName: inputName.value,
    serverContent: this.serverContentInput.nativeElement.value
   });
  }

  onAddBlueprint(inputName) {
    this.blueprintCreated.emit({
      serverName: inputName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
