import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Observable, Subscription } from "rxjs";
import { finalize } from "rxjs/operators";

import { User } from "../user.model";
import { UserService } from "../user.service";

@Component({
    selector: "app-user-update-profile",
    templateUrl: "./user-update-profile.component.html",
    styleUrls: ["./user-update-profile.component.css"],
})
export class UserUpdateProfileComponent implements OnInit, OnDestroy {
    @Input() user: User;

    displayName: FormControl;

    uploadPercent: Observable<number>;

    downloadURL: Observable<string>;

    taskRef: Subscription;

    constructor(private userService: UserService) {
        this.displayName = new FormControl("");
    }

    ngOnInit() {
        this.displayName.setValue(this.user.displayName);
    }

    ngOnDestroy() {
        this.taskRef?.unsubscribe();
    }

    async uploadPhotoURL(event: Event) {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;

        const { task, fileRef } = await this.userService.uploadPhotoURL(files, this.user);

        this.uploadPercent = task.percentageChanges();
        this.taskRef = task
            .snapshotChanges()
            .pipe(
                finalize(() => {
                    this.downloadURL = fileRef.getDownloadURL();
                }),
            )
            .subscribe();
    }

    async changeProfile() {
        const profile: Partial<User> = {
            displayName: this.displayName.value,
        };
        if (this.downloadURL) {
            const url = await this.downloadURL.toPromise();
            profile.photoURL = url;
        }
        return this.userService.changeProfile(profile);
    }

    clear() {
        this.displayName.reset();
    }
}
