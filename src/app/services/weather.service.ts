import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  apiKey: string = '381d8c7e2b3044b5a4e76ec995d98d59';
  URI: string = '';

  constructor(private http: HttpClient) {
   
  }

  

  getOldWeather(cityName: string, countryCode: string)
  {
    return this.http.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&country=${countryCode}&key=${this.apiKey}`);
  }

  getOldFWeather(cityName: string, countryCode: string)
  {
    return this.http.get(`https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&country=${countryCode}&units=I&key=${this.apiKey}`);
  }
}
