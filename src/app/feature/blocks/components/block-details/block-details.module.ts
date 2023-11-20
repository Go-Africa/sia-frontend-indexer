import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockDetailsRoutingModule } from './block-details-routing.module';
import { BlockDetailsComponent } from './block-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlockDetailsComponent
  ],
  imports: [
    CommonModule,
    BlockDetailsRoutingModule,
    SharedModule,

  ]
})
export class BlockDetailsModule { }
