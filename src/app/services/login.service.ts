import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';

interface AuthProps {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})

export class LoginService {
  private readonly apiURL = environment.apiURL
  
  constructor(private httpClient: HttpClient) {}

  auth(data: AuthProps) {
    return this.httpClient.post<{ token: string }>(`${this.apiURL}/auth`, data)
    .pipe(
      tap((response: { token: string }) => {
        if(response.token) {
          localStorage.setItem('token', response.token)
        }
      })
    )
  }

  public isAuthenticated() {
    const token = localStorage.getItem('token')
    return token != undefined
  }
}
