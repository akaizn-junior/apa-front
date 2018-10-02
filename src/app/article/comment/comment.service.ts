import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  BASE_URL: string;

  constructor(private http: HttpClient) {
    this.BASE_URL = 'http://localhost:3000/api/comments'
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

  create(body) {
    return this.http
    .post(`${this.BASE_URL}/`, body)
    .pipe(map(data => data));
  }
}
