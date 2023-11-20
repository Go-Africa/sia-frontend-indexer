import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:':hash', loadChildren: () => import('./components/transaction-details/transaction-details.module').then(m => m.TransactionDetailsModule)},
  { path:'', loadChildren: () => import('./components/transactions-list/transactions-list.module').then(m => m.TransactionsListModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
