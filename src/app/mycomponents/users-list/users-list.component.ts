import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/myServices/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  users:Array<any>=[];
  type:boolean=false;

  constructor(private user:UsersService,private router:Router) {
    this.users=this.user.getData();
   }

   hasRoute(route : string){
    return this.router.url.includes(route);
   }

   deleteUser(id: any) {
    this.user.deleteUser(id);
  }

  activateUser(id: any) {
    this.user.activateUser(id);
  }
  ngOnInit(): void {
  }


}
