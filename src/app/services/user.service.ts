import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('http://localhost:3333/users');
  }

  createUser(data: User) {
    return this.httpClient.post('http://localhost:3333/users', data);
  }
}
