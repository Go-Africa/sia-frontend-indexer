import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailComponent } from './components/address-detail/address-detail.component';

const routes: Routes = [
  { path: ':address', component: AddressDetailComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdressesRoutingModule { }
