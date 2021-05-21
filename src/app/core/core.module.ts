import { NgModule } from "@angular/core";

import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AuthModule } from "../auth/auth.module";
import { AuthService } from "./auth.service";
import { UserModule } from '../user/user.module';

@NgModule({
  imports: [
    AuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    UserModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule {}
