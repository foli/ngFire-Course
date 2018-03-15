import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FromNowPipe } from "./from-now.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    FromNowPipe,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [FromNowPipe]
})
export class SharedModule {}
