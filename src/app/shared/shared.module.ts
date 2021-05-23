import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../app-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FromNowPipe } from "./from-now.pipe";
import { UploadComponent } from "./upload/upload.component";
import { UploadService } from "./upload/upload.service";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FromNowPipe,
    MaterialModule,
    NavbarComponent,
    ReactiveFormsModule,
    UploadComponent
  ],
  declarations: [FromNowPipe, UploadComponent, NavbarComponent],
  providers: [UploadService]
})
export class SharedModule {}
