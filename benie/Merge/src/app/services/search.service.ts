import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseURL = 'https://gfive.herokuapp.com/api/books/'
  private usersURL = 'https://gfive.herokuapp.com/api/user/profile'

  constructor(private http:HttpClient) { }

  search(){
    return this.http.get(this.baseURL)
  }

  getUsers(){
    return this.http.get(this.usersURL)
  }
}
