import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HqComponent } from './hq/hq.component';
import { MenuItemsComponent } from './menu-items/menu-items.component';

const routes: Routes = [
  { path: '', component:  HqComponent },
  { path: 'menu-items', component:  MenuItemsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HqRoutingModule { }
