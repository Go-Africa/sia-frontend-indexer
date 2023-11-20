import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { Transaction, TransactionListMODEL, TransactionOneListMODEL } from '../../models/transaction';
import { Observable, Subject, interval, lastValueFrom, takeUntil } from 'rxjs';
import { BlockService } from 'src/app/feature/blocks/services/block.service';
import { Block, BlockOneListMODEL } from 'src/app/feature/blocks/models/block';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit, OnDestroy {

  block!: BlockOneListMODEL;
  page = 0;
  count = 0;
  pageSize = 5;
  loading!: boolean
  destroy$ = new Subject<void>()

  constructor(private _transactionService: TransactionService, private _blockService: BlockService) { }

  transactions!: TransactionOneListMODEL[]

  ngOnInit(): void {
    this.loading = true;
    this.init(0, this.pageSize);
  }

  init(page: number, limit: number) {
    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(async () => {
      const res: TransactionListMODEL = await lastValueFrom(this._transactionService.getAllTransactions(page, limit));
      this.transactions = await res.data
      await this.blockInfo()
      this.count = await res.pageCount
      this.loading = await false;
      console.log("Mes transactions : ", this.count, this.transactions);
    })

  }

  handlePageChange(event: number): void {
    this.page = event;
    console.log(event)
    this.init(event, this.pageSize);
  }


  /*get block infos*/
  async blockInfo() {
    const blk: any = await lastValueFrom(this._blockService.getSpecificBlock(this.transactions[0].height.toString()));
    this.block = blk
    console.log("Mon lbock : ", this.block)
  }

  stopSpolling() {
    this.destroy$.next()
  }


  ngOnDestroy(): void {
    this.stopSpolling()
  }

}
