import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  private url = 'http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=aa77705f0aaa40e4fec79565e66375a2';
  constructor(private http: Http) { }

  getWeather(): Observable<Response> {
    return this.http.get(this.url).map(response => response.json());
  }

}
