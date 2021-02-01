import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {
  returnString: string="Cannot Parse Value";

  transform(value: any){
  
      if (!value){
        this.returnString= "Cannot Parse this format of date";
        return this.returnString;
      }

        var time = Date.parse(value),
        timeNow = new Date().getTime(),
        difference = timeNow - time,
        seconds = Math.floor(difference / 1000),
        minutes = Math.floor(seconds / 60),
        hours = Math.floor(minutes / 60),
        days = Math.floor(hours / 24);

      if (days > 1) {
        this.returnString=  days + " days ago";
      } else if (days == 1) {
        this.returnString= "1 day ago"
      } else if (hours > 1) {
        this.returnString= hours + " hours ago";
      } else if (hours == 1) {
        this.returnString= "an hour ago";
      } else if (minutes > 1) {
        this.returnString= minutes + " minutes ago";
      } else if (minutes == 1) {
        this.returnString= "a minute ago";
      } else {
        this.returnString= "a few seconds ago";
      }
  return this.returnString      
  }

}
