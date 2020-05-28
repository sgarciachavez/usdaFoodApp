export class FoodDetails {
    isFavorite: boolean;
    fdcId:number;
    foodClass: string;
    description: string;
    brandOwner:string;
    ingredients:string;
    foodNutrients:[{
        amount:number;
        nutrient:{
            id:number;
            name:string;
            unitName:string;
        }
    }];
}
