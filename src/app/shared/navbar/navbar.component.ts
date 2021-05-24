import { Component } from "@angular/core";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
    appTitle = "ngFire";

    constructor(public auth: AuthService) {}
}
