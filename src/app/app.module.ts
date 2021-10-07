import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { provideFirebaseApp, initializeApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { FunctionsModule, getFunctions, provideFunctions } from "@angular/fire/functions";
import { getStorage, provideStorage } from "@angular/fire/storage";
import { environment } from "../environments/environment";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages/pages.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FunctionsModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideFunctions(() => getFunctions()),
        provideStorage(() => getStorage()),
        AppRoutingModule,
        PagesModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
