import { Component } from '@angular/core';
import { ServiceUsdaService } from '../service/service-usda.service';
import { Food } from '../models/food';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  foodlist:Food[];
  constructor(
    private usdaService: ServiceUsdaService,
    private router: Router) {}

  onInput(evt){
    //Do Search 
    const searchTerm = evt.srcElement.value;
    if(searchTerm.length > 2){
      this.usdaService.getFoodItems(searchTerm).subscribe( items => {
        //console.log(JSON.stringify(items));
        this.foodlist = items["foods"];
        this.foodlist.sort((a, b) => (a.description > b.description) ? 1 : -1);
        //console.log(JSON.stringify(this.foodlist));
     });
    }
  }

  onClear(){
    this.foodlist = [];
  }

  onCardClick(id:number){
    //console.log(id);
    this.router.navigate([`food-item/${id}`]);
  }

}
