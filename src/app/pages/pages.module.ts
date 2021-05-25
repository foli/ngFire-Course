import { NgModule } from "@angular/core";

import { PagesRoutingModule } from "./pages-routing.module";
import { SharedModule } from "../shared/shared.module";

import { HomeComponent } from "./home/home.component";
import { LayoutComponent } from "./layout/layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { NavigationModule } from "../navigation/navigation.module";

@NgModule({
    declarations: [HomeComponent, LayoutComponent, NotFoundComponent],
    imports: [PagesRoutingModule, SharedModule, NavigationModule],
    exports: [LayoutComponent],
})
export class PagesModule {}
