import { NgModule } from "@angular/core";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SharedModule } from "../shared/shared.module";

import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";
import { UserModule } from "../users/users.module";

@NgModule({
    declarations: [UserDashboardComponent],
    imports: [SharedModule, SettingsRoutingModule, UserModule],
})
export class SettingsModule {}
