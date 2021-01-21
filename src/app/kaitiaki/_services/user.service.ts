import { Injectable, NgZone } from '@angular/core';
import { User } from "../_models/user";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})

export class UsersService {
    
  private authApiBase: string = 'https://adrp.gorge.nz';
  
  constructor(
    private httpClient: HttpClient,    
    public authService: AuthService,
  ) {    

  }

  // Sign in with email/password
  users() {
    return this.httpClient.get<any>(`${this.authApiBase}/auth/local`, 
      { headers: {
        Authorization: `Bearer ${this.authService.authToken}`,
      }})
      .pipe(map(response => {
          return response;
      }));
  }

  me() {
    return this.httpClient.get<any>(`${this.authApiBase}/users/me`, 
      { headers: {
        Authorization: `Bearer ${this.authService.authToken}`,
      }})
      .pipe(map(response => {
          return response;
      }));
  }

}