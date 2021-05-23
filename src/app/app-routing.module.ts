import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '', loadChildren: () => import('./chat/chat.module').then(m => m.ChatModule)},
  { path: '', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
  { path: "", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class RoutingModule {}
