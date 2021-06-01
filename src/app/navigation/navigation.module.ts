import { NgModule } from "@angular/core";
import { TopbarComponent } from "./topbar/topbar.component";
import { SharedModule } from "../shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";

@NgModule({
    declarations: [TopbarComponent, SidebarComponent],
    imports: [SharedModule],
    exports: [TopbarComponent, SidebarComponent],
})
export class NavigationModule {}
