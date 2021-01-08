import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverId=10;
  status='offline';
  allowServer =false;
  serverName='TestServer';
  serverCreationStatus='Server not Created';

constructor() {
setTimeout(()=>{this.allowServer=true;}, 2000)
   }
  getstatus(){return this.status}


  ngOnInit(): void {
  }

onCreateServer(){
  this.serverCreationStatus= this.serverName + ' has been created ';
}

onUpdateServerName(event: any){
  this.serverName= event.target.value;
}

}