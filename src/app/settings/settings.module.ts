import { NgModule } from "@angular/core";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SharedModule } from "../shared/shared.module";

import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

@NgModule({
    declarations: [UserDashboardComponent],
    imports: [SharedModule, SettingsRoutingModule],
})
export class SettingsModule {}
