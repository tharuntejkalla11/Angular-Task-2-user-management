import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './mycomponents/user/user.component';
import { UserDetailsComponent } from './mycomponents/user-details/user-details.component';
import { UsersListComponent } from './mycomponents/users-list/users-list.component';
import { ActiveModule } from './MyModules/active/active.module';
import { DeletedModule } from './MyModules/deleted/deleted.module';
import { ManageModule } from './MyModules/manage/manage.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './mycomponents/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ActiveModule,
    DeletedModule,
    ManageModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
