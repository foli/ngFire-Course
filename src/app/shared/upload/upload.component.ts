import { Component, Input } from "@angular/core";
import { UploadService } from "./upload.service";

@Component({
    selector: "app-upload",
    templateUrl: "./upload.component.html",
    styleUrls: ["./upload.component.css"],
})
export class UploadComponent {
    @Input() path;

    @Input() meta;

    @Input() uploadType;

    selection: FileList;

    constructor(private uploadService: UploadService) {}

    detect(event) {
        this.selection = event.target.files;
    }

    upload() {
        const file = this.selection[0];
        if (file.type.split("/")[0] === "image") {
            this.uploadService.uploadTask(this.path, file, this.meta, this.uploadType);
        } else {
            console.log("image only pls");
        }
    }
}
