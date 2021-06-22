import { Component } from "@angular/core";
import { SidenavService } from "src/app/navigation/sidenav.service";

@Component({
    selector: "app-post-dashboard",
    templateUrl: "./post-dashboard.component.html",
    styleUrls: ["./post-dashboard.component.css"],
})
export class PostDashboardComponent {
    title: string = "Dashboard";

    constructor(public sidenavService: SidenavService) {}
}
