import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SuccessStoriesService {
  private readonly apiURL = environment.apiURL;

  constructor(private httpClient: HttpClient) {}

  getSucessStories() {
    return this.httpClient.get<{ description: string, title: string }[]>(
      `${this.apiURL}/success-stories`,
      {
        headers: new HttpHeaders().set(
          'Authorization',
          `Bearer ${localStorage.getItem('token')!}`
        ),
      }
    );
  }
}
