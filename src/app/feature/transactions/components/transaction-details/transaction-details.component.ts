import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TransactionOneListMODEL } from '../../models/transaction';
import { BlockService } from 'src/app/feature/blocks/services/block.service';
import { Block } from 'src/app/feature/blocks/models/block';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  transaction : TransactionOneListMODEL = new TransactionOneListMODEL
  block! : Block
  code = true
  events! :any
  amount : any = "none"
  fee : any = "none"

  constructor(private _location : Location,
    private _route: ActivatedRoute,
    private _transactionService : TransactionService,
    private _blockService : BlockService,
    private _clipboard: Clipboard,
    private _notifier : NotificationService) { }

  ngOnInit(): void {
    this.init()
  }

  async init() {
    const transactionHash = this._route.snapshot.params['hash'];
    console.log("transaction Hash: " + transactionHash);
    this.transaction  = await lastValueFrom(this._transactionService.getSpecificTransaction(transactionHash));
    // this.transaction = res.data
    console.log("transaction get: ", this.transaction);
    this.events = this.transaction.height
    console.log("transaction events: ", this.events);
    this.blockInfo()


  }

   /*get block infos*/
   async blockInfo() {
    const blk : any= await lastValueFrom(this._blockService.getSpecificBlock(this.transaction.height.toString()));
    this.block = blk.data
    console.log("block get: ",this.block)
  }

  /*copy on clipboard*/
  copyText(textToCopy: string) {
    this._clipboard.copy(textToCopy);
    this._notifier.onSuccess('Copied !!!')
  }

  back() {
    this._location.back();
  }

}
