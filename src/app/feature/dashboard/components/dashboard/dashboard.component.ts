import { Component, OnDestroy, OnInit } from '@angular/core';
import { chartOptions, chartOptions1, chartOptions2 } from './utils/data-chart';
import { DashboardService } from '../../services/dashboard.service';
import { Subject, interval, lastValueFrom, takeUntil } from 'rxjs';
import { Transaction, TransactionListMODEL } from 'src/app/feature/transactions/models/transaction';
import { TransactionService } from 'src/app/feature/transactions/services/transaction.service';
import { BlockService } from 'src/app/feature/blocks/services/block.service';
import { BlockListGetMODEL, BlockOneListMODEL } from 'src/app/feature/blocks/models/block';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  blockHeight: any;

  constructor(private _transactionService: TransactionService,
    private _blockService: BlockService, 
    private _dashboardService: DashboardService
  ) { }

  latestPrice: any;
  latestPrices: any[] = [];
  transactions!:  TransactionListMODEL
  private destroy$ = new Subject<void>()

  async ngOnInit(): Promise<void> {
    this.getLatestTransactions()

    //get block height
    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(async () => {
      const res: BlockListGetMODEL = await lastValueFrom(this._blockService.getAllBlocks(1, 1));
      this.blockHeight = res.docs[0].height

    })

    // get the latest prices
    this.latestPrice = await lastValueFrom(this._dashboardService.getLatestPrice());
    console.log(this.latestPrice);
    this.latestPrices = await lastValueFrom(this._dashboardService.getHistoricalPrice());
    console.log(this.latestPrices);
    
  }

  stopSpolling() {
    this.destroy$.next()
  }


  ngOnDestroy(): void {
    this.stopSpolling()
  }


  //get latest transactions
  async getLatestTransactions() {
    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(async () => {
      const res: any = await lastValueFrom(this._transactionService.getAllTransactions(1, 10));
      this.transactions = res.docs
      console.log("Get latest transactions :", this.transactions);
    })

  }

  public chartOptions = chartOptions;
  public chartOptions1 = chartOptions1;
  public chartOptions2 = chartOptions2;

}
