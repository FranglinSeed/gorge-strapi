import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KaitiakiComponent } from './kaitiaki/kaitiaki.component';

const routes: Routes = [
  { path: '', component:  KaitiakiComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class KaitiakiRoutingModule { }
