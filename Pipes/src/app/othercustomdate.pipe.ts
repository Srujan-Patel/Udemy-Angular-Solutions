import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'othercustomdate'
})
export class OthercustomdatePipe implements PipeTransform {

  returnString: string="";

  transform(value: any){
    
      if (!value) {
        this.returnString = "Cannot Parse the Date"
      }

        var time = Date.parse(value),
        timeNow = new Date().getTime(),
        difference = timeNow - time,
        seconds = Math.floor(difference / 1000),
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24);

      
      if (days > 1) {
        this.returnString=  this.returnString + days +" days ";
      } 
      if (hours >= 1) {
        this.returnString= this.returnString + (hours- days*24) + " hours ";
      }
       if (minutes >= 1) {
        this.returnString= this.returnString + (minutes- hours*60) + " minutes ";
      }
       if(seconds>=1) {
        this.returnString= this.returnString + (seconds- minutes*60) + " seconds ago ";
      }

  return this.returnString      
  }

}
