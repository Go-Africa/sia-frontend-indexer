import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Clipboard } from '@angular/cdk/clipboard';
import { Address } from '../../models/address';
import { AddressService } from '../../services/address.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.scss']
})
export class AddressDetailComponent implements OnInit {

  address! : Address
  transactions! : any[]

  constructor(
    private _route: ActivatedRoute,
    private _addressService : AddressService,
    private _clipboard: Clipboard,
    private _notifier : NotificationService
  ) { }

  ngOnInit(): void {
    this.init()
  }

  async init() {
    const accountAddress = this._route.snapshot.params['address'];
    console.log("account Address: " + accountAddress);
    const res : any = await lastValueFrom(this._addressService.getSpecificAddress(accountAddress));
    this.address = res.data
    console.log("address get: ", this.address);
    this.transactions = this.address.transactions
    console.log("transactions's address: ", this.transactions);
  }

   /*copy on clipboard*/
   copyText(textToCopy: string) {
    this._clipboard.copy(textToCopy);
    this._notifier.onSuccess('Copied !!!')
  }

}
