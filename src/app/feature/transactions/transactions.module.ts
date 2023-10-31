import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsListComponent } from './components/transactions-list/transactions-list.component';
import { TransactionDetailsComponent } from './components/transaction-details/transaction-details.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    TransactionsListComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
    NgxPaginationModule,
  ]
})
export class TransactionsModule { }
