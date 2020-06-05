import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceUsdaService } from '../../service/service-usda.service';
import {FoodDetails } from '../../models/food-details'
import { Food } from '../../models/food'

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.page.html',
  styleUrls: ['./food-item.page.scss'],
})
export class FoodItemPage implements OnInit {
  fooditem:FoodDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usdaService: ServiceUsdaService

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('fdcId')) {
        //redirect
        return;
      }
      const fdcId = paramMap.get('fdcId')
      console.log(fdcId);
      this.usdaService.getFoodByFdcid(fdcId).subscribe(item =>{
        //console.log("result: " + JSON.stringify(item));
        this.fooditem = <any>item;
        this.fooditem.isFavorite = this.isFavorite(this.fooditem.fdcId.toString())
      })
    }) 
  }

  isFavorite(id:String){
    var item = localStorage.getItem(id.toString())
    return item ? true : false
  } 

  onToggle(){  
    this.fooditem.isFavorite = !this.fooditem.isFavorite;

    if(this.fooditem.isFavorite){
      //add to localstorage
      let food = new Food();
      food.fdcId = this.fooditem.fdcId;
      food.brandOwner = this.fooditem.brandOwner;
      food.description = this.fooditem.description;
      food.ingredients = this.fooditem.ingredients;
    
      localStorage.setItem(this.fooditem.fdcId.toString(), JSON.stringify(food));
    }else{
      //remove from localstorage
      localStorage.removeItem(this.fooditem.fdcId.toString())
    }   
  }
}
