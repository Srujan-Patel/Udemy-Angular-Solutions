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
  serverCreate= false;
  servers=['TestServer1', 'TestServer2']

constructor() {
setTimeout(()=>{this.allowServer=true;}, 2000)
this.status= Math.random() >=0 ?'online': 'offline';
   }
 


  ngOnInit(): void {
  }

onCreateServer(){
  this.serverCreate=true;
  this.serverCreationStatus= this.serverName + ' has been created ';
  this.servers.push(this.serverName);

}

onUpdateServerName(event: any){
  this.serverName= event.target.value;
}

getColor(){

  return this.status === 'online'? 'green': 'red';
}



}