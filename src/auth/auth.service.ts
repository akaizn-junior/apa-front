import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL: string;

  constructor(private http: HttpClient, private router: Router) {
    this.BASE_URL = 'http://localhost:3000/auth/local';
  }

  _login(body) {
    return this.http
    .post(`${this.BASE_URL}/`, body)
    .pipe(map(data => data));
  }

  entrar(body, success, fail) {
    return this._login(body)
    .subscribe(data => {
      //use local storage for caching, for now
      localStorage.setItem('usrTkn', data['token']);
      return success();
    },
    err => {
      return fail(true, err.error.message);
    });
  }

  logout() {
    localStorage.removeItem('usrTkn');
    //go home
    this.router.navigate(['']);
  }

}
