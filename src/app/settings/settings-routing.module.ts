import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SettingsDashboardComponent } from "./settings-dashboard/settings-dashboard.component";

const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "me" },
    { path: "me", component: SettingsDashboardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingsRoutingModule {}
