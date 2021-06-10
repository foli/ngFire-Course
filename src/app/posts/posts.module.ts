import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { PostsRoutingModule } from "./posts-routing.module";

import { PostDashboardComponent } from "./post-dashboard/post-dashboard.component";
import { PostDetailComponent } from "./post-detail/post-detail.component";
import { PostListComponent } from "./post-list/post-list.component";
import { PostListItemComponent } from "./post-list-item/post-list-item.component";
import { PostCreateComponent } from "./post-create/post-create.component";

@NgModule({
    imports: [SharedModule, PostsRoutingModule],
    declarations: [
        PostDashboardComponent,
        PostDetailComponent,
        PostListComponent,
        PostListItemComponent,
        PostCreateComponent,
    ],
    exports: [PostDashboardComponent],
})
export class PostsModule {}
