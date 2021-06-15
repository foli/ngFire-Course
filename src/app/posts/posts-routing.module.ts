import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDashboardComponent } from "./post-dashboard/post-dashboard.component";

import { PostDetailComponent } from "./post-detail/post-detail.component";

const routes: Routes = [
    { path: "", component: PostDashboardComponent, data: { title: "Blog" } },
    { path: ":id", component: PostDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostsRoutingModule {}
