import { NgModule } from "@angular/core";

import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireStorageModule } from "angularfire2/storage";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AuthModule } from "../auth/auth.module";
import { AuthService } from "./auth.service";

@NgModule({
  imports: [
    AuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule {}
