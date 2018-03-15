import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    AuthModule
  ],
  declarations: [],
  providers: [AuthService]
})
export class CoreModule { }
