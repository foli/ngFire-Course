import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";
import { SharedModule } from "../shared/shared.module";

import { PasswordlessComponent } from "./passwordless/passwordless.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
    imports: [AuthRoutingModule, SharedModule],
    declarations: [SigninComponent, SignupComponent, ResetPasswordComponent, PasswordlessComponent],
})
export class AuthModule {}
