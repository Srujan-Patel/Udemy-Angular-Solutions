import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    // here value is an array
    // filterString is what the user entered
    //propName is to be filtered property

    if(value.length ===0 ||filterString==='')
    {return value;
    }
    const resultArray=[];
    for (const item of value)
  { 
    if (item.status===filterString){
      resultArray.push(item);
    }
  }
  
  return resultArray;


  }

}
