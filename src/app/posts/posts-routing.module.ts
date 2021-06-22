import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDashboardComponent } from "./post-dashboard/post-dashboard.component";

import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
    { path: "", component: PostListComponent, data: { title: "List" } },
    { path: "dashboard", component: PostDashboardComponent, data: { title: "Dashboard" } },
    { path: ":id", component: PostDetailComponent, data: { title: "Post" } },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule {}
