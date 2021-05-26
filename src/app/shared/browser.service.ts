/* eslint-disable class-methods-use-this */
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class BrowserService {
    browserWindow: Window;

    constructor() {
        this.browserWindow = this.getBrowserWindow();
    }

    public getBrowserWindow(): Window {
        return window;
    }
}
