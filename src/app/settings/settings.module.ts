import { NgModule } from "@angular/core";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SharedModule } from "../shared/shared.module";
import { UsersModule } from "../users/users.module";

import { SettingsDashboardComponent } from "./settings-dashboard/settings-dashboard.component";

@NgModule({
    declarations: [SettingsDashboardComponent],
    imports: [SharedModule, SettingsRoutingModule, UsersModule],
})
export class SettingsModule {}
