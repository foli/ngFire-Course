import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes = [
  { path: "signin", component: SigninComponent, data: { title: "Sign in" } },
  { path: "signup", component: SignupComponent, data: { title: "Sign up" } },
  {
    path: "reset-password",
    component: ResetPasswordComponent,
    data: { title: "Reset password" }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  declarations: [SigninComponent, SignupComponent, ResetPasswordComponent]
})
export class AuthModule {}
