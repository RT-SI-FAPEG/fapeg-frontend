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
  userEmail?: string
  
  constructor(private httpClient: HttpClient) {}

  auth(data: AuthProps) {
    return this.httpClient.post<{ token: string, id: string, email: string }>(`${this.apiURL}/auth`, data)
    .pipe(
      tap((response: { token: string, id: string, email: string }) => {
        if(response.token) {
          this.userEmail = response.email
          localStorage.setItem('token', response.token)
          localStorage.setItem('userId', response.id)
        }
      })
    )
  }

  public isAuthenticated() {
    const token = localStorage.getItem('token')
    return token != undefined
  }
}
