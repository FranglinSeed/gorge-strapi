import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HRComponent } from './hr/hr.component';

const routes: Routes = [
  { path: '', component:  HRComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HrRoutingModule { }
