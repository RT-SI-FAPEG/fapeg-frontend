import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiURL = environment.apiURL
  
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(`${this.apiURL}/users`);
  }

  createUser(data: User) {
    return this.httpClient.post(`${this.apiURL}/users`, data);
  }
}
