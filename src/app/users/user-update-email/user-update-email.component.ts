import { Component, Input, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
    selector: "app-user-update-email",
    templateUrl: "./user-update-email.component.html",
    styleUrls: ["./user-update-email.component.css"],
})
export class UserUpdateEmailComponent implements OnInit {
    @Input() user: User;

    email: FormControl;

    constructor(private userService: UserService) {
        this.email = new FormControl("", [
            Validators.required,
            Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),
        ]);
    }

    ngOnInit() {
        this.email.setValue(this.user.email);
    }

    changeEmail() {
        return this.userService.changeEmail(this.email.value);
    }

    clear() {
        this.email.reset();
    }
}
