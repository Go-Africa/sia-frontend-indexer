import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksListRoutingModule } from './blocks-list-routing.module';
import { BlocksListComponent } from './blocks-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BlocksListComponent,
  ],
  imports: [
    CommonModule,
    BlocksListRoutingModule,
    SharedModule,

  ]
})
export class BlocksListModule { }
