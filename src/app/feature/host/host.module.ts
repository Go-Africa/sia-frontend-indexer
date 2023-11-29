import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HostRoutingModule } from './host-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HostRoutingModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class HostModule { }
