import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "../shared/shared.module";
import { UsersRoutingModule } from "./users-routing.module";

import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserListItemComponent } from "./user-list-item/user-list-item.component";
import { UserUpdateEmailComponent } from "./user-update-email/user-update-email.component";
import { UserUpdateProfileComponent } from "./user-update-profile/user-update-profile.component";

@NgModule({
    imports: [RouterModule, SharedModule, UsersRoutingModule],
    declarations: [
        UserDashboardComponent,
        UserDetailComponent,
        UserUpdateEmailComponent,
        UserListComponent,
        UserListItemComponent,
        UserUpdateProfileComponent,
    ],
    exports: [UserDashboardComponent],
})
export class UsersModule {}
