import { Component } from "@angular/core";
import { SidenavService } from "../sidenav.service";

interface Link {
    name: string;
    url: string;
}

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
    links: Link[] = [
        {
            name: "Users",
            url: "/users",
        },
    ];

    constructor(private sidenavService: SidenavService) {}

    close() {
        this.sidenavService.close();
    }

    toggle() {
        this.sidenavService.toggle();
    }
}
