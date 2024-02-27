import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
