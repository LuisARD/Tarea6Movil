import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/clima/weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {
  cityName: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  searchWeather() {
    this.weatherService.getWeatherData(this.cityName).subscribe((data) => {
      this.weatherData = data;
      console.log(this.weatherData);
    }, (error) => {
      console.error('Error fetching weather data:', error);
    });
  }
  formatDate(timestamp: number): string {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  }
}
