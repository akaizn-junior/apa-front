import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:3000/api/users'
  }

  getAll() {
    return this.http
    .get(`${this.BASE_URL}`)
    .pipe(map(data => data));
  }

  /**
   * getChunk
   * Request a chunk of data from the database
   * @param {number} skip The amout of initial data to skip
   * @param {number} limit The amout of data to return
   */
  getChunk(skip: number, limit: number) {
    return this.http
    .get(`${this.BASE_URL}/${skip}/${limit}`)
    .pipe(map(data => data));
  }

  getOne(id: string) {
    return this.http
    .get(`${this.BASE_URL}/${id}`)
    .pipe(map(data => data));
  }

  /**
   * getItem
   * grab data related to a user
   * @param {number} id The user id
   * @param {string} item The user item to get
   */
  getItem(id: number, item: string){
    return this.http
    .get(`${this.BASE_URL}/${id}/${item}`)
    .pipe(map(data => data));
  }

  me() {
    let tkn = localStorage.getItem('usrTkn');
    return this.http
    .get(`${this.BASE_URL}/me`, {
      headers: {
      'Content-type': 'application/json',
      'Authorization': `Bearer ${tkn}`
      }
  })
    .pipe(map(data => data));
  }
}
