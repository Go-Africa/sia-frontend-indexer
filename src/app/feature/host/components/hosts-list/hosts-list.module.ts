import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostsListRoutingModule } from './hosts-list-routing.module';
import { HostsListComponent } from './hosts-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HostsListComponent
  ],
  imports: [
    CommonModule,
    HostsListRoutingModule,
    SharedModule
  ]
})
export class HostsListModule { }
