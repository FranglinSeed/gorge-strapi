import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HRComponent } from './hr/hr.component';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';



@NgModule({
  declarations: [
    HRComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HrRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})

export class HrModule { }
