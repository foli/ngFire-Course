import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from "rxjs";

@Injectable()
export class UploadService {
    downloadURL: Observable<string>;

    uploads: AngularFirestoreCollection<any>;

    constructor(private afs: AngularFirestore, private storage: AngularFireStorage) {}

    // uploadTask(path, file, meta, uploadType) {
    //     const nameHash = file.name + new Date().getTime();
    //     const fileExt = file.type.split("/")[1];
    //     const name = `${nameHash}.${fileExt}`;

    //     const newMeta = {
    //         ...meta,
    //         someMoreData: "Moooore data",
    //     };

    //     const ref = this.storage.ref(`${path}/${name}`);
    //     const task = ref.put(file, { customMetadata: newMeta });

    //     this.downloadURL = task.downloadURL()

    //     if (uploadType == true) {
    //       // saves as collection
    //       this.uploads = this.afs.collection(path)
    //       this.downloadURL.subscribe(url => {
    //         const data = { name, url }
    //         this.uploads.add(data)
    //       })
    //     } else {
    //       // saves as document field
    //       this.downloadURL.subscribe(url => {
    //         this.afs.doc(path).update({ url })
    //       })
    //     }
    // }
}
