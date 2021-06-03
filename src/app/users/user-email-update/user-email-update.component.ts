import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
    selector: "app-user-email-update",
    templateUrl: "./user-email-update.component.html",
    styleUrls: ["./user-email-update.component.css"],
})
export class UserEmailUpdateComponent {
    @Input() user: User;

    email: FormControl;

    constructor(private userService: UserService) {
        this.email = new FormControl("", [
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),
        ]);
    }

    changeEmail() {
        return this.userService.changeEmail(this.email.value);
    }
}
