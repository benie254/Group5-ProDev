import { Component, OnInit } from '@angular/core';
import { UsersDataService } from 'src/app/services/users-data.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'],
})
export class UserdetailComponent implements OnInit {
  users: any;
  constructor(private UsersData: UsersDataService) {
    this.UsersData.users().subscribe((data) => {
      this.users = data;
    });
  }

  ngOnInit(): void {}
}
