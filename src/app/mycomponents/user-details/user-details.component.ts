import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/myServices/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  users:Array<any>=[];
  details_id:string='';

  constructor(private user:UsersService) {
    this.users=this.user.getData();
  }
  showDetails( id:string){
    this.details_id=id;
  }
  ngOnInit(): void {
  }

}
