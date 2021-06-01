import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";

import { AuthService } from "src/app/auth/auth.service";
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

    constructor(
        private route: Router,
        public afAuth: AngularFireAuth,
        private authService: AuthService,
        private sidenavService: SidenavService,
    ) {}

    close() {
        this.sidenavService.close();
    }

    signOut(): void {
        this.authService.signOut();
        this.close();
    }

    signIn(): void {
        this.route.navigate(["auth", "signin"]);
        this.close();
    }

    goToSettings(): void {
        this.route.navigate(["settings"]);
        this.close();
    }
}
