import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface IndicatorsData {
    title: string,
    value: string
}

@Injectable({
  providedIn: 'root',
})

export class IndicatorsService {
  private readonly apiURL = environment.apiURL
  
  constructor(private httpClient: HttpClient) { }

  getIndicators() {
    return this.httpClient.get<IndicatorsData[]>(`${this.apiURL}/indicators`,
      {
        headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`)
      }
    )
  }
}
