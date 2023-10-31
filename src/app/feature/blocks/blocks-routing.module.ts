import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksListComponent } from './components/blocks-list/blocks-list.component';
import { BlockDetailsComponent } from './components/block-details/block-details.component';
import { TransactionDetailsComponent } from '../transactions/components/transaction-details/transaction-details.component';

const routes: Routes = [
  { path:'',component: BlocksListComponent },
  { path:':height',component: BlockDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocksRoutingModule { }
