import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  users: any;
  postForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    publisher: new FormControl('', [Validators.required]),
  });
  constructor(private UsersData: UsersDataService, private http: HttpClient) {
    this.UsersData.users().subscribe((data) => {
      this.users = data;
    });
  }
  submitBookForm(book_data: any) {
    console.warn(this.postForm.value);
    this.http
      .post('http://127.0.0.1:8000/api/books/', book_data)
      .subscribe((result) => {
        console.warn('result', result);
      });
  }
  get title() {
    return this.postForm.get('title');
  }
  get author() {
    return this.postForm.get('author');
  }
  get description() {
    return this.postForm.get('description');
  }
  get publisher() {
    return this.postForm.get('publisher');
  }
  ngOnInit(): void {}
}

