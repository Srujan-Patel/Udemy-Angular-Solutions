import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import{Recepie} from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
@Output() recepieWasSelected= new EventEmitter<Recepie>();
  recepies: Recepie[]=[
  new Recepie('A test recepie', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400'),
  new Recepie('Second test recepie', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400')
];
  constructor() { }

  ngOnInit(): void {
  }

onRecepieSelected(recepie:Recepie){
this.recepieWasSelected.emit(recepie)
}


}
