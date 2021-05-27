import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppMaterialModule } from "../app-material.module";

import { FromNowPipe } from "./from-now.pipe";

const sharedModules = [
    AppMaterialModule,
    CommonModule,
    FromNowPipe,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
];

@NgModule({
    declarations: [FromNowPipe],
    exports: [...sharedModules],
    imports: [],
})
export class SharedModule {}
