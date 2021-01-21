import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LiveMenuComponent } from './pages/live-menu/live-menu.component';

const routes: Routes = [

  { path: '', component:  HomePageComponent},
  { path: 'live-menu', component:  LiveMenuComponent, canActivate: [AuthGuard]},
  { path: 'kaitiaki', loadChildren: () => import( './kaitiaki/kaitiaki.module' ).then( m => m.KaitiakiModule ) },
  { path: 'hr', loadChildren: () => import( './hr/hr.module' ).then( m => m.HrModule ), canActivate: [AuthGuard] },
  { path: 'hq', loadChildren: () => import( './hq/hq.module' ).then( m => m.HqModule ), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
