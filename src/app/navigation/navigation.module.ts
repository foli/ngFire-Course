import { NgModule } from "@angular/core";
import { TopbarComponent } from "./topbar/topbar.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [TopbarComponent],
    imports: [SharedModule],
    exports: [TopbarComponent],
})
export class NavigationModule {}
