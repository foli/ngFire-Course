import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ServiceWorkerModule } from "@angular/service-worker";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { MaterialModule } from "./app-material.module";
import { SharedModule } from "./shared/shared.module";

import { RoutingModule } from "./app-routing.module";
import { PostModule } from "./post/post.module";
import { GalleryModule } from "./gallery/gallery.module";
import { ChatModule } from "./chat/chat.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ServiceWorkerModule.register("/ngsw-worker.js", { enabled: environment.production }),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireStorageModule,
        AngularFireAuthModule,
        MaterialModule,
        SharedModule,
        RoutingModule,
        PostModule,
        GalleryModule,
        ChatModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
