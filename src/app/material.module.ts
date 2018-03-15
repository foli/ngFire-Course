import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
@NgModule({
  imports: [MatButtonModule, MatIconModule, MatInputModule],
  exports: [MatButtonModule, MatIconModule, MatInputModule]
})
export class MaterialModule {}
