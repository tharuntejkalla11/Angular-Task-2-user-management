import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from 'src/app/myServices/users.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UsersService]
})
export class DeletedModule { }
