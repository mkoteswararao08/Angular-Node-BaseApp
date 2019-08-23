import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',   
})
export class HomeComponent {
  constructor(private http:HttpClient) {}
  weather;
  tempF;
  tempC;
  chennai="13.007961, 80.218110";
  bengaluru="12.9716,77.5946";
  hyderabad="17.384662, 78.482888";
//   newheaders=new HttpHeaders({ 'Access-Control-Allow-Origin':'http://localhost:3000',
//                                 'Access-Control-Allow-Credentials':'true',
//                                 mode: 'no-cors' 
//                               });
  ngOnInit(){
      this.http.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/84496b80d1d951f0ae918f9183db51c6/"+this.hyderabad).subscribe((data)=>{
           this.weather=data;  
           this.tempF=this.weather.currently.temperature;
           this.tempC = (this.tempF-32)*(0.556);
      })
  }
}
