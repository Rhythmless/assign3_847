import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [WeatherService]
})
export class DashboardComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {
    weatherService.getWeather().subscribe(data => this.weather = data);
  }

  ngOnInit() {
  }

}
