import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
@NgModule({
  imports: [MatButtonModule, MatCardModule, MatIconModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatIconModule, MatInputModule]
})
export class MaterialModule {}
