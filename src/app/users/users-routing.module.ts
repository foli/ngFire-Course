import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
    { path: "", component: UserListComponent, data: { title: "User List" } },
    { path: ":id", component: UserDetailComponent, data: { title: "User Profile" } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule {}
