import { Component, OnInit } from '@angular/core';
import { Book } from './book-class/book';
import { PostService } from './services/post.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: any;
  book: Book;
  userData: any;
  

  constructor(private service: PostService, private http: HttpClient) {}

  ngOnInit() {
    this.service.getPosts().subscribe((response: any) => {
      this.posts = response;
    });
    interface ApiResponse {
      author: string;
      description: string;
    }
    this.http
      .get<Book>('https://gfive.herokuapp.com/api/books/')
      .subscribe((data: { author: string; description: string; }) => {
        console.log('book dret', this.book);
        
        // Succesful API request
        this.book = new Book(data.author, data.description);
      });
  }
  getUserFormData(data:any){
      console.warn(data)
      this.userData.saveUser(data).subscribe((result: any)=>{
        console.warn
      })
  }
}
