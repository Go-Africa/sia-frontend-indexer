import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostsListComponent } from './hosts-list.component';

const routes: Routes = [
  {path: '', component: HostsListComponent},
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostsListRoutingModule { }
