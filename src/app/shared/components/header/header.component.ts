import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { BlockService } from 'src/app/feature/blocks/services/block.service';
import { lastValueFrom } from 'rxjs';
import { TransactionService } from 'src/app/feature/transactions/services/transaction.service';
import { Router } from '@angular/router';
import { ValidatorService } from 'src/app/feature/validators/services/validator.service';
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
    private _validatorservice : ValidatorService,
    private _transactionService : TransactionService,
    private _router : Router
    ) { }

  searchForm!: FormGroup;

  options =['Address','Block','Transaction','Validator']

  ngOnInit(): void {

    this.searchForm = this._formBuilder.group({
      search : ['', Validators.required],
      selectedItem : ['Address', Validators.required]
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

    if (choice == 'Address'){
      await lastValueFrom(this._addressService.getSpecificAddress(element)).then((data)=>{
        this._router.navigate(["/addresses/",data.data.address])
      }
      
      ).catch(()=>{
      this.notifier.onError('Verify if your address is correct and retry !');
      });

    }else if (choice == 'Block'){
      const data = await lastValueFrom(this._blockService.getSpecificBlock(element));
      if (data.statusCode === 200){
        this._router.navigate(["/blocks/",data.data.height])
      }
    }else if (choice == 'Transaction'){
      const data = await lastValueFrom(this._transactionService.getSpecificTransaction(element));
      if (data.statusCode === 200){
        this._router.navigate(["/transactions/",data.data.hash])
      }
    }else if (choice == 'Validator'){
      const data = await lastValueFrom(this._validatorservice.getSpecificValidator(element));
      if (data.statusCode === 200){
        this._router.navigate(["/validators/",data.data.operator_address])
      }
    }
  }

  eventOnClick(elt:any){
    console.log("element :",elt)
    if (elt == 'Block'){
      this._router.navigate(["/blocks"])
    }else if (elt == 'Transaction'){
      this._router.navigate(["/transactions"])
    }else if (elt == 'Validator'){
      this._router.navigate(["/validators"])
    }
  }

}
