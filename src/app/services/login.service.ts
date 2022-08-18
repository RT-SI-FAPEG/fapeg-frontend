import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface AuthProps {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private readonly apiURL = environment.apiURL
  
  constructor(private httpClient: HttpClient) {}

  auth(data: AuthProps) {
    return this.httpClient.post(`${this.apiURL}/users`, data);
  }
}
