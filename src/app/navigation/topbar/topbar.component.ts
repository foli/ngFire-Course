import { Component, Input } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "src/app/auth/auth.service";

import { SidenavService } from "../sidenav.service";

@Component({
    selector: "app-topbar",
    templateUrl: "./topbar.component.html",
    styleUrls: ["./topbar.component.css"],
})
export class TopbarComponent {
    @Input() title: string = "ngFire";

    constructor(
        public afAuth: AngularFireAuth,
        public authService: AuthService,
        public navSrv: SidenavService,
    ) {}
}
