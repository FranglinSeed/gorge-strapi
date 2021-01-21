import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../_shared/shared.module';
import { KaitiakiRoutingModule } from './kaitiaki-routing.module';
import { KaitiakiComponent } from './kaitiaki/kaitiaki.component';

import { LoginComponent } from './login/login.component';
import { AuthService } from './_services/auth.service';
import { AuthGuard } from '../_guards/auth.guard';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    KaitiakiComponent,
    LoginComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    SharedModule,
    CommonModule,
    KaitiakiRoutingModule,
  ], 
  providers: [
    AuthService,
    AuthGuard,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'} } 
  ]
  
})

export class KaitiakiModule { }
