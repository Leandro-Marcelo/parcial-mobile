import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // create endpoint to auth
  login(username: string, password: string) {
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('username', username);
      return true;
    } else {
      return false;
    }
  }

  // create endpoint to logout
  logout() {
    localStorage.removeItem('username');
  }

  // create endpoint to check if user is logged in
  isLogged() {
    return localStorage.getItem('username') !== null;
  }

  // create endpoint to get username
  getUsername() {
    return localStorage.getItem('username');
  }
}
