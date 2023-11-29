import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HostDetailsComponent } from './host-details.component';

const routes: Routes = [
  {path: '', component: HostDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HostDetailsRoutingModule { }
