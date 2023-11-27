import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { BlockService } from 'src/app/feature/blocks/services/block.service';
import { lastValueFrom } from 'rxjs';
import { TransactionService } from 'src/app/feature/transactions/services/transaction.service';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/feature/adresses/services/address.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor( 
    private _formBuilder: FormBuilder,
    private notifier: NotificationService,
    private _addressService : AddressService,
    private _blockService : BlockService,
    private _transactionService : TransactionService,
    private _router : Router
    ) { }

  searchForm!: FormGroup;

  options =['Block','Transaction']

  ngOnInit(): void {

    this.searchForm = this._formBuilder.group({
      search : ['', Validators.required],
      selectedItem : ['Block', Validators.required]
    })
  }

  async onSubmit(){
    if (this.searchForm.invalid){
      this.notifier.onWarning('Be sure to make a choice in the drop-down list and enter the search item !');
    }
    this.notifier.onInfo('Loading...');
    const choice = this.searchForm.value.selectedItem
    const element  = this.searchForm.value.search
    console.log('select ', choice)
    console.log('search ', element)

    if (choice == 'Block'){
      const res = await lastValueFrom(this._blockService.getSpecificBlock(element));
      if (res.statusCode == 404){
        console.log(res.message)
        this.notifier.onError("Error : " + res.message)
      }else{
        this._router.navigate(["/blocks/",res.height])
      }
    }else if (choice == 'Transaction'){
        const response = await lastValueFrom(this._transactionService.getSpecificTransaction(element));
        if (response.statusCode == 404){
          console.log(response.message)
          this.notifier.onError("Error : " + response.message)
        }else{
          this._router.navigate(["/transactions/",element])
        }
    }
  }

  eventOnClick(elt:any){
    console.log("element :",elt)
    if (elt == 'Block'){
      this._router.navigate(["/blocks"])
    }else if (elt == 'Transaction'){
      this._router.navigate(["/transactions"])
    }
  }

}
