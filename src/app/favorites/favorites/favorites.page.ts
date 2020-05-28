import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorties:Food[];

  constructor() { }

  ngOnInit() {
    
    let arr:Food = this.favorties;
    if(!arr){
      arr=[];
    }

    Object.keys(localStorage).forEach(k =>{
      let str:string = localStorage.getItem(k);
      let food:Food = JSON.parse(str);
      console.log(JSON.stringify(food));
      arr.push(food);
    })

    this.favorties = arr;
  }

  onCardClick(){
    console.log("onCardClick");
  }
}
