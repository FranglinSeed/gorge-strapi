import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../_shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HqRoutingModule } from './hq-routing.module';
import { HqComponent } from './hq/hq.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';


@NgModule({
  declarations: [HqComponent, MenuItemsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HqRoutingModule,
  ]
})
export class HqModule { }
