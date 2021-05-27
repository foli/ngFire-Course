import { NgModule } from "@angular/core";

import { PostModule } from "../post/post.module";
import { SharedModule } from "../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserListItemComponent } from "./user-list-item/user-list-item.component";

@NgModule({
    imports: [SharedModule, UsersRoutingModule, PostModule],
    declarations: [UserDetailComponent, UserListComponent, UserListItemComponent],
})
export class UserModule {}
