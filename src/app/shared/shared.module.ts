import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FromNowPipe } from "./from-now.pipe";
import { UploadComponent } from './upload/upload.component';
import { UploadService } from './upload/upload.service';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    FormsModule,
    FromNowPipe,
    MaterialModule,
    ReactiveFormsModule,
    UploadComponent
  ],
  declarations: [FromNowPipe, UploadComponent],
  providers: [UploadService]
})
export class SharedModule {}
