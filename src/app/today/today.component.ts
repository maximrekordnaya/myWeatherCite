import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {WeatherService} from "../weather.service";

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit, AfterViewInit {
lat =0;
lon =0;
map:any;
@ViewChild('mapElement') mapElement:any;
weather: any;
 declare google: any;

  constructor(private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((succes)=>{
        this.lat = succes.coords.latitude;
        this.lon = succes.coords.longitude;


        this.WeatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
          this.weather = data;
          console.log(this.weather)

        });

      })

    }
  }

  getCity(city:string){
    this.WeatherService.getWeatherByCityName(city).subscribe(data=>{
      this.weather = data;
    });
}

  ngAfterViewInit(): void {
    this.map = new this.google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 14,
    });
  }
}
