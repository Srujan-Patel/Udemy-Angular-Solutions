import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {



  // value and propName are passed automatically by JS into a, b

  transform(value: any, propName: string ): any {
    return value.sort((a ,b )=>{
    if (a[propName]>b[propName]){
      return 1;

    }else{
      return -1;
      
    }
    });
  }

}
