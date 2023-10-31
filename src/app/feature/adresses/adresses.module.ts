import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdressesRoutingModule } from './adresses-routing.module';
import { AddressDetailComponent } from './components/address-detail/address-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddressDetailComponent
  ],
  imports: [
    CommonModule,
    AdressesRoutingModule,
    SharedModule
  ]
})
export class AdressesModule { }
