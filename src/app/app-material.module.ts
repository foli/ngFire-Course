import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatListModule,
        MatMenuModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatProgressBarModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatListModule,
        MatMenuModule,
    ],
})
export class MaterialModule {}
