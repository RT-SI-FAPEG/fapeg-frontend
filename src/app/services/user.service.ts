import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UpdateUserBody, User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiURL = environment.apiURL
  
  constructor(private httpClient: HttpClient) {}

  getUser(id: string) {
    return this.httpClient.get<User>(`${this.apiURL}/user/${id}`,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`)
    });
  }

  createUser(data: User) {
    return this.httpClient.post(`${this.apiURL}/user`, data);
  }

  updateUser(data: UpdateUserBody) {
    return this.httpClient.put(`${this.apiURL}/user`, data,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')!}`)
    });
  }
}
