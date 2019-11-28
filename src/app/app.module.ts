import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './secure/secure.component';
import { HastagListComponent } from './secure/hastag-list/hastag-list.component';
import { SecureService } from './secure/secure.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    HastagListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SecureService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
