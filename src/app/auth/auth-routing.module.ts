import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PasswordlessComponent } from "./passwordless/passwordless.component";

import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    { path: "", component: PasswordlessComponent, data: { title: "Authenticate" } },
    { path: "signin", component: SigninComponent, data: { title: "Sign in here plese" } },
    { path: "signup", component: SignupComponent, data: { title: "Sign up" } },
    {
        path: "reset-password",
        component: ResetPasswordComponent,
        data: { title: "Password Reset" },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
