import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { PUBLIC_ROUTES } from './public/public.route';
import { SECURE_ROUTES } from './secure/secure.route';

const routes: Routes = [
  { path: '', redirectTo: '/hastag2', pathMatch: 'full', },
  { path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PUBLIC_ROUTES },
  { path: '', component: SecureComponent, data: { title: 'Secure Views' }, children: SECURE_ROUTES }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
