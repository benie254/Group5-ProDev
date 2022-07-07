import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  url = 'https://gfive.herokuapp.com/api/books/<int:pk>/';

  constructor(private http: HttpClient) {}
  users() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
}
