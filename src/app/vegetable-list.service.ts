import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { vegetableListFormat } from './VegetableListFormat';

@Injectable({
  providedIn: 'root'
})
export class VegetableListService {

 // public url= ["/assets/Data/VegetableList.json", "/assets/Data/Fruit.json", "/assets/Data/Bread.json","/assets/Data/DryFruit.json"];
  // i:any;
  public vegetableUrl ="/assets/Data/vegetableList.json";
  public fruitUrl ="/assets/Data/fruitList.json";
  public breadUrl ="/assets/Data/breadList.json";
  public dryFruitUrl = "/assets/Data/dryFruit.json"
  names: any;


  getItems(url: string):Observable<vegetableListFormat>{
    return this.http.get<vegetableListFormat>(url);
  }







  getFruit():Observable<vegetableListFormat>{
    return this.http.get<vegetableListFormat>(this.fruitUrl);
  }
  getBread():Observable<vegetableListFormat>{
    return this.http.get<vegetableListFormat>(this.fruitUrl);
  }
  getDryFruit():Observable<vegetableListFormat>{
    return this.http.get<vegetableListFormat>(this.dryFruitUrl);
  }
  
  constructor(private http: HttpClient) { }
}
