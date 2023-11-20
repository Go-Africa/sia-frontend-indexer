import { Component, OnInit } from '@angular/core';
import { Validator } from '../../models/validator';
import { ValidatorService } from '../../services/validator.service';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Location } from '@angular/common';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-validator-detail',
  templateUrl: './validator-detail.component.html',
  styleUrls: ['./validator-detail.component.scss']
})
export class ValidatorDetailComponent implements OnInit {

  validator! : Validator
  updateTime!:any

  constructor(private _location : Location,
    private _route: ActivatedRoute,
    private _validatorService : ValidatorService,
    private _clipboard: Clipboard,
    private _notifier : NotificationService) { }

  ngOnInit(): void {
    this.init()
  }

  async init() {
    const validatorAddress = this._route.snapshot.params['address'];
    console.log("validator address: " + validatorAddress);
    const res : any = await lastValueFrom(this._validatorService.getSpecificValidator(validatorAddress));
    this.validator = res.data
    this.updateTime = this.validator.update_time.slice(1,25)+"Z"
    console.log("updateTime: ", this.updateTime);
    console.log("validator get: ", this.validator);

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
