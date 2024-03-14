// weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY`;
    return this.http.get<any>(url);
  }
}
