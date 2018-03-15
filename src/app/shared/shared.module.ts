import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule {}
