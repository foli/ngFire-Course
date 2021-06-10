import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "auth",
        loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "blog",
        loadChildren: () => import("./posts/posts.module").then((m) => m.PostsModule),
    },
    {
        path: "home",
        loadChildren: () => import("./pages/pages.module").then((m) => m.PagesModule),
    },
    {
        path: "settings",
        loadChildren: () => import("./settings/settings.module").then((m) => m.SettingsModule),
    },
    {
        path: "users",
        loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
    },
    { path: "**", component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
