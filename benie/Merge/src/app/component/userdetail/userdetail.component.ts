import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UsersDataService } from 'src/app/services/users-data.service';
import { Root } from 'src/app/interface/root';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  users: any;
  user: Root = {
    title: '',
    author: '',
    description: '',
    publisher: '',
    image: undefined,
    category: '',
    price: 0,
  };
  constructor(
    private UsersData: UsersDataService,
    private activatedRoute: ActivatedRoute,
    private http:HttpClient,
  ) {
   
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      // console.log('user id:', params.get.('id'));
      this.UsersData.getUser().subscribe((results: any) => {
        console.log(results);
      });
    });
     this.UsersData.getUser().subscribe((data) => {
       this.users = data;
     });
  }
}
