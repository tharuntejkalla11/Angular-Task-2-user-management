import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from 'src/app/mycomponents/user/user.component';
import { UsersService } from 'src/app/myServices/users.service';



@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
  exports:[UserComponent],
  providers:[UsersService],
})
export class ActiveModule { }
