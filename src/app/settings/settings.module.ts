import { NgModule } from "@angular/core";

import { SettingsRoutingModule } from "./settings-routing.module";
import { SharedModule } from "../shared/shared.module";
import { UserModule } from "../users/users.module";

import { SettingsDashboardComponent } from "./settings-dashboard/settings-dashboard.component";

@NgModule({
    declarations: [SettingsDashboardComponent],
    imports: [SharedModule, SettingsRoutingModule, UserModule],
})
export class SettingsModule {}
