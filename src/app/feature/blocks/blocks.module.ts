import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksRoutingModule } from './blocks-routing.module';
import { BlockDetailsComponent } from './components/block-details/block-details.component';
import { BlocksListComponent } from './components/blocks-list/blocks-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    BlockDetailsComponent,
    BlocksListComponent,
  ],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class BlocksModule { }
