import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = "http://api.openweathermap.org/data/2.5/weather";
  // url = `http://api.weatherapi.com/v1/current.json?key=bda9d386bbf04282a9383151210812&q=`
  apiKey = "c8a607546996e8fe1480ecb2cc6c8008";
  constructor(private http: HttpClient) {}
  getWeatherDataByCoords(lat:number, lon:number){
    let params = new HttpParams()
      .set(`lat`, lat)
      .set(`lon`, lon)
      .set(`appid`, this.apiKey)
      return this.http.get(this.url, {params});
  }

  getWeatherByCityName(city:string){
    // let params = new HttpParams()
    //   .set(`q`, city)
    //   .set(`appid`, this.apiKey)
    return this.http.get(this.url + "?q=" + city+"&appid="+this.apiKey);
    // return this.http.get(this.url + city + "&aqi=no")
  }
}














