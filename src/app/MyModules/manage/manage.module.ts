import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from 'src/app/mycomponents/user-details/user-details.component';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[UserDetailsComponent]
})
export class ManageModule { }
