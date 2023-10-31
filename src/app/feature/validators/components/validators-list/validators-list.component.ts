import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validator } from '../../models/validator';
import { ValidatorService } from '../../services/validator.service';
import { Subject, interval, lastValueFrom, takeUntil } from 'rxjs';

@Component({
  selector: 'app-validators-list',
  templateUrl: './validators-list.component.html',
  styleUrls: ['./validators-list.component.scss']
})
export class ValidatorsListComponent implements OnInit,OnDestroy {

  validator!: Validator;
  page = 1;
  count = 0;
  pageSize = 25;
  loading! : boolean
  destroy$ = new Subject<void>()

  constructor(private _validatorService : ValidatorService) { }

  validators : Validator[]=[]

  ngOnInit(): void {
    this.loading = true; 
    this.init(0,this.pageSize);
  }

  init(page:number,limit:number) {

    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(async ()=>{
      const res:any = await lastValueFrom(this._validatorService.getAllValidators(page,limit));
      this.validators = res.data
      this.count = res.totalItems
      this.loading = false;
      console.log('validators get',this.validators);
    })
    
  }

  handlePageChange(event: number): void {
    this.page = event;
    console.log(event)
    this.init(event,this.pageSize);
  }


  stopSpolling(){
    this.destroy$.next()
  }


  ngOnDestroy(): void {
    this.stopSpolling()
  }

}
