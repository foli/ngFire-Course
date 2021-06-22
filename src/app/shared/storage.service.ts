import { Injectable } from "@angular/core";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class StorageService {
    constructor(private storage: AngularFireStorage) {}

    uploadImage(file: File, path: string) {
        try {
            const fileRef = this.storage.ref(path);
            const task = this.storage.upload(path, file);

            return { task, fileRef };
        } catch (error) {
            return error;
        }
    }

    getDownloadURL(path: string): Observable<string> {
        try {
            return this.storage.ref(path).getDownloadURL();
        } catch (error) {
            console.log(error.message);
            return error;
        }
    }
}
