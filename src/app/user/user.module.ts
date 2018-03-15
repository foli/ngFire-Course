import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { PostModule } from "../post/post.module";

import { UserService } from "./user.service";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserListItemComponent } from "./user-list-item/user-list-item.component";

const routes: Routes = [
  {
    path: "me",
    component: UserDashboardComponent,
    data: { title: "Dashboard" }
  },
  { path: "users", component: UserListComponent, data: { title: "Users" } },
  {
    path: "users/:id",
    component: UserDetailComponent,
    data: { title: "Profile" }
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes), PostModule],
  exports: [UserListItemComponent],
  declarations: [
    UserDashboardComponent,
    UserDetailComponent,
    UserListComponent,
    UserListItemComponent
  ],
  providers: [UserService]
})
export class UserModule {}
