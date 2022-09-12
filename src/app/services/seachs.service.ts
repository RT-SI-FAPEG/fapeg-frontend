import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchesService {
  private readonly apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getSearchs(page: number, filter?: { key: string, value: string }) {
    console.log(filter)
    return this.httpClient.post(
      `${this.apiURL}/searches?page=${page}&perPage=${10}`, { filter },
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')!}`
        ),
      }
    );
  }
}
