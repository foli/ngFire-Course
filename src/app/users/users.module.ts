import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PostModule } from "../post/post.module";
import { SharedModule } from "../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserListItemComponent } from "./user-list-item/user-list-item.component";
import { UserEmailUpdateComponent } from "./user-email-update/user-email-update.component";

@NgModule({
    imports: [PostModule, RouterModule, SharedModule, UsersRoutingModule],
    declarations: [
        UserDetailComponent,
        UserEmailUpdateComponent,
        UserListComponent,
        UserListItemComponent,
    ],
    exports: [UserEmailUpdateComponent],
})
export class UserModule {}
