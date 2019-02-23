import { DailistComponent } from './dailist/dailist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeeklystatsComponent } from './weeklystats/weeklystats.component';

const routes: Routes = [
  { path: 'dailylist', component: DailistComponent },
  { path: 'stats', component: WeeklystatsComponent },
  { path: '**', redirectTo: 'dailylist', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
