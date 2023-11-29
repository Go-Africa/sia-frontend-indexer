import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren: () => import('./components/hosts-list/hosts-list.module').then(m => m.HostsListModule) },
  { path:':publicKey', loadChildren: () => import('./components/host-details/host-details.module').then(m =>  m.HostDetailsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostRoutingModule { }
