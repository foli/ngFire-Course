import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "me" },
    { path: "me", component: UserDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
