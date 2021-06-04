import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { User } from "../user.model";

@Component({
    selector: "app-user-dashboard",
    templateUrl: "./user-dashboard.component.html",
    styleUrls: ["./user-dashboard.component.css"],
})
export class UserDashboardComponent implements OnInit {
    user$: Observable<User>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user$ = this.authService.user$;
    }
}
