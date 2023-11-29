import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostDetailsRoutingModule } from './host-details-routing.module';
import { HostDetailsComponent } from './host-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HostDetailsComponent
  ],
  imports: [
    CommonModule,
    HostDetailsRoutingModule,
    SharedModule
  ]
})
export class HostDetailsModule { }
