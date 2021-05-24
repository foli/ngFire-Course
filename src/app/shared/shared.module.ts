import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppMaterialModule } from "../app-material.module";

const sharedModules = [
    AppMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
];

@NgModule({
    declarations: [],
    exports: [...sharedModules],
    imports: [],
})
export class SharedModule {}
