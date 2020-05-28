import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodDetails } from '../models/food-details';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsdaService {

  private usdaURL:string = "https://api.nal.usda.gov/fdc/v1/";
    private api:string = "api_key=jCLdOxyi11qSgDkLreI3sliDUNeTFi4eRFquMYQ5";
  
    constructor(private http:HttpClient) { }
    
    //Do Search
    getFoodItems(searchTerm: string):Observable<any[]>{
      const foodSearch = "foods/search?&";
      const url = `${this.usdaURL}${foodSearch}${this.api}&query=${searchTerm}`
      //console.log(url);
      return this.http.get<any[]>(url);
   }

   //get by fdcid
   getFoodByFdcid(fdcid: string):Observable<any[]>{
     const foodid = `food/${fdcid}?`;
     const url = `${this.usdaURL}${foodid}${this.api}`;
     return this.http.get<any[]>(url);
   }
}
