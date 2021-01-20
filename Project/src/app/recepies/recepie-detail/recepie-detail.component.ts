import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
recepie: Recepie;
id:number;
constructor(private recepieService: RecepieService,
  private route: ActivatedRoute,
  private router: Router){}

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params)=>{this.id=+params['id'];
    this.recepie= this.recepieService.getRecepie(this.id);}
    );
  }
onAddToShoppingList(){
this.recepieService.addIngredientsToShoppingList(this.recepie.ingredients);
}


onEditRecepie(){
this.router.navigate(['edit'], {relativeTo: this.route});
}
}
