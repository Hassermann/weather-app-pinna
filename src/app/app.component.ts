import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import * as CanvasJS from '../assets/canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  location = { cityName: 'Cajeme', countryCode: 'mx' };
  weather = undefined;
  show: boolean = true;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather(this.location.cityName, this.location.countryCode);
  }

  getFWeather(cityName: string, countryCode: string){
    debugger
    this.weatherService
      .getOldFWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
          this.show = false;

          let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: `Forecast in: ${this.weather.city_name}`
            },
            data: [{
              type: "column",
              dataPoints: [
                { y: this.weather.data[0].temp , label: this.weather.data[0].datetime },
                { y: this.weather.data[1].temp , label: this.weather.data[1].datetime },
                { y: this.weather.data[2].temp , label: this.weather.data[2].datetime },
                { y: this.weather.data[3].temp , label: this.weather.data[3].datetime },
                { y: this.weather.data[4].temp , label: this.weather.data[4].datetime },
                { y: this.weather.data[5].temp , label: this.weather.data[5].datetime },
                { y: this.weather.data[6].temp , label: this.weather.data[6].datetime },
                { y: this.weather.data[7].temp , label: this.weather.data[7].datetime },
                { y: this.weather.data[8].temp , label: this.weather.data[8].datetime },
                { y: this.weather.data[9].temp , label: this.weather.data[9].datetime },
                { y: this.weather.data[10].temp , label: this.weather.data[10].datetime },
                { y: this.weather.data[11].temp , label: this.weather.data[11].datetime },
                { y: this.weather.data[12].temp , label: this.weather.data[12].datetime },
                { y: this.weather.data[13].temp , label: this.weather.data[13].datetime },
                { y: this.weather.data[14].temp , label: this.weather.data[14].datetime },
              ]
            }]
          });
            
          chart.render();

        },
        err => {
          console.log(err);
        }
      );


  }
  getWeather(cityName: string, countryCode: string) {
    debugger
    this.weatherService
      .getOldWeather(cityName, countryCode)
      .subscribe(
        res => {
          console.log(res);
          this.weather = res;
          this.show = true;

          let chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: `Forecast in: ${this.weather.city_name}`
            },
            data: [{
              type: "column",
              dataPoints: [
                { y: this.weather.data[0].temp , label: this.weather.data[0].datetime },
                { y: this.weather.data[1].temp , label: this.weather.data[1].datetime },
                { y: this.weather.data[2].temp , label: this.weather.data[2].datetime },
                { y: this.weather.data[3].temp , label: this.weather.data[3].datetime },
                { y: this.weather.data[4].temp , label: this.weather.data[4].datetime },
                { y: this.weather.data[5].temp , label: this.weather.data[5].datetime },
                { y: this.weather.data[6].temp , label: this.weather.data[6].datetime },
                { y: this.weather.data[7].temp , label: this.weather.data[7].datetime },
                { y: this.weather.data[8].temp , label: this.weather.data[8].datetime },
                { y: this.weather.data[9].temp , label: this.weather.data[9].datetime },
                { y: this.weather.data[10].temp , label: this.weather.data[10].datetime },
                { y: this.weather.data[11].temp , label: this.weather.data[11].datetime },
                { y: this.weather.data[12].temp , label: this.weather.data[12].datetime },
                { y: this.weather.data[13].temp , label: this.weather.data[13].datetime },
                { y: this.weather.data[14].temp , label: this.weather.data[14].datetime },
              ]
            }]
          });
            
          chart.render();

        },
        err => {
          console.log(err);
        }
      );
  }

}
