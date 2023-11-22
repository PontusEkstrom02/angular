import { Component } from '@angular/core';
import { WeatherService } from '../../../weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.sass']
})
export class WeatherDisplayComponent {

  constructor(private weatherService: WeatherService) {}

  getWeatherData(city: string): void {
    this.weatherService.getWeather(city).subscribe((data) => {
      // Handle the data received from the API
      console.log(data);
    });
  }
}
