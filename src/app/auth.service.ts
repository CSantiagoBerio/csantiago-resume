import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private isLogged = new BehaviorSubject<boolean>(false);

   get isLoggedIn () {
     return this.isLogged.asObservable();
   }

  constructor(
    private router: Router
  ) { }

  login () {
    this.isLogged.next(true);
  }
}
