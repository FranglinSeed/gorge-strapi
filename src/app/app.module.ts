import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LiveMenuComponent } from './pages/live-menu/live-menu.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './_shared/shared.module';
import { AuthService } from './kaitiaki/_services/auth.service';
import { AuthGuard } from './_guards/auth.guard';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LiveMenuComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,

    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [ AuthService, AuthGuard, {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}} ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
