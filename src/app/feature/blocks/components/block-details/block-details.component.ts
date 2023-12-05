import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Block, BlockOneListMODEL } from '../../models/block';
import { BlockService } from '../../services/block.service';
import { Transaction } from 'src/app/feature/transactions/models/transaction';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss']
})
export class BlockDetailsComponent implements OnInit {

  block! : BlockOneListMODEL
  transactions! : string[]
  page = 1;
  count = 0;
  pageSize = 25;
  loading! : boolean

  constructor(private _location : Location,private _route: ActivatedRoute,private _blockService : BlockService,
    private _clipboard: Clipboard,
    private _notifier : NotificationService) { }

  ngOnInit(): void {
    this.loading = true; 
    this.init(1,this.pageSize);
  }

  async init(page:number,limit:number) {
    const blockHeight = await this._route.snapshot.params['height'];
    console.log("blockHeight: " + blockHeight);
    const res : BlockOneListMODEL = await lastValueFrom(this._blockService.getSpecificBlock(blockHeight));
    this.block = res
    console.log("block get: ", this.block);
    // const trans : any = await lastValueFrom(this._blockService.getTransactionsBlock(blockHeight));
    this.transactions = await res.transactionId
    this.count = await res.transactionId.length
    this.loading = await false;
    console.log("Transaction's block get: ", this.count, this.transactions);

  }

  handlePageChange(event: number): void {
    this.page = event;
    console.log(event)
    this.init(event,this.pageSize);
  }

  /*copy on clipboard*/
  copyText(textToCopy: string) {
    this._clipboard.copy(textToCopy);
    this._notifier.onSuccess('Copied !!!')
  }

  formatTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Convertir le timestamp en millisecondes
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `${day}-${month}-${year} at ${hours}:${minutes}:${seconds}`;
  }

  back() {
    this._location.back();
  }
}
