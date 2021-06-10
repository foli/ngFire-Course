import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDashboardComponent } from "./post-dashboard/post-dashboard.component";

import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";

const routes: Routes = [
    { path: "", component: PostDashboardComponent },
    {
        path: "posts",
        component: PostListComponent,
        children: [{ path: ":id", component: PostDetailComponent }],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule {}
