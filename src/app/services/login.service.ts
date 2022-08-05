import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthProps {
  user: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient) {}

  auth(data: AuthProps) {
    return this.httpClient.post('http://localhost:3333/users', data);
  }
}
