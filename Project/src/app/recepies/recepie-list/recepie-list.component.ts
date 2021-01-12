import { Component, OnInit } from '@angular/core';
import{Recepie} from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
recepies: Recepie[]=[
  new Recepie('A test recepie', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400'),
  new Recepie('A test recepie', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?webp=true&quality=90&resize=440%2C400')
];
  constructor() { }

  ngOnInit(): void {
  }

}
