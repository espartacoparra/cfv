import { Component, OnInit } from '@angular/core';
import { RequestService } from "../../../services/request.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users = [];
  constructor(private request: RequestService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.request.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
