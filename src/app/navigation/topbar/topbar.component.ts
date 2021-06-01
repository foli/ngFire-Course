import { Component, Input } from "@angular/core";

import { SidenavService } from "../sidenav.service";

@Component({
    selector: "app-topbar",
    templateUrl: "./topbar.component.html",
    styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent {
    @Input() title: string = "ngFire";

    constructor(private sidenavService: SidenavService) {}

    toggle() {
        this.sidenavService.toggle();
    }
}
