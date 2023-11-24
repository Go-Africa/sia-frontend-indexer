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
  page: number = 1;
  count: number = 0;
  pageSize: number = 10;
  loading!: boolean
  destroy$ = new Subject<void>()

  constructor(private _transactionService: TransactionService, private _blockService: BlockService) { }

  transactions!: TransactionOneListMODEL[]

  ngOnInit(): void {
    console.log("Ma page: ", this.page);

    this.stopSpolling()
    this.loading = true;
    this.init(this.page, this.pageSize);
  }

  init(page: number, limit: number) {
    // interval(1000).subscribe( async  () => {
        console.log("Ma page: ", this.page);
        this.loading = true;
         this._transactionService.getAllTransactions(page, limit).subscribe(res => {
          this.transactions = res.docs;
          this.count = res.totalDocs;
          this.loading = false;
        });


        // await this.blockInfo()
        console.log("Mes transactions : ", this.count, this.transactions);

    //   }
    // )

  }

  handlePageChange(event: number): void {
    // this.page = event;
    // console.log("Change page", event)
    // this.init(event, this.pageSize);

    this.page = event;
    this.loading = true; // Peut-être réinitialiser loading ici si nécessaire
    this.transactions = []; // Réinitialiser les transactions
    this.init(event, this.pageSize);
  }


  /*get block infos*/
  async blockInfo() {
    const blk: any = await lastValueFrom(this._blockService.getSpecificBlock(this.transactions[0].height.toString()));
    this.block = blk
    console.log("Mon lbock : ", this.block)
  }

  stopSpolling() {
    this.destroy$.next();
    this.destroy$.complete();
  }


  ngOnDestroy(): void {
    this.stopSpolling()
  }

}
