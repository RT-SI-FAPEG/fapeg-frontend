import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})

export class SearchesService {
  private readonly apiURL = environment.apiURL
  
  constructor(private httpClient: HttpClient) { }

  getSearchs() {
    return this.httpClient.get(`${this.apiURL}/searches`)
  }
}
