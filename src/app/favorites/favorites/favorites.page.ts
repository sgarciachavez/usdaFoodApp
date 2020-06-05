import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorties:Food[];

  constructor(private router: Router){
    
   }

  ngOnInit() {
    
    let arr:Food[] = this.favorties;
    if(!arr){
      arr=[];
    }

    Object.keys(localStorage).forEach(k =>{
      let str:string = localStorage.getItem(k);
      let food:Food = JSON.parse(str);
      //console.log(JSON.stringify(food));
      arr.push(food);
    })

    this.favorties = arr;
  }

  removeFavorite(id:number){
    console.log(id);
    this.favorties = this.favorties.filter((f) => {
      return f.fdcId !== id
    })

    localStorage.removeItem(id.toString())
  }

  removeAll(){
    console.log("Remove ALL")
    this.favorties = [];
    localStorage.clear();
  }

  onCardClick(id:number){
    //console.log(id);
    this.router.navigate([`food-item/${id}`]);
  }
}
