import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlockService } from '../../services/block.service';
import { Block } from '../../models/block';
import { Subject, interval, lastValueFrom, takeUntil } from 'rxjs';


@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit, OnDestroy {

  constructor(private _blockService : BlockService) {}

  blocks : Block[]=[]
  page = 1;
  count = 0;
  pageSize = 25;
  destroy$ = new Subject<void>()

  loading! : boolean

  ngOnInit(): void {
    this.loading = true;
    this.init(0,this.pageSize)
  }

   init(page:number,limit:number) {
    interval(5000).pipe(takeUntil(this.destroy$)).subscribe(async ()=>{
      const res:any = await lastValueFrom(this._blockService.getAllBlocks(page,limit));
      this.blocks = res.data
      console.log("result",res)
      this.count = res.totalItems
      this.loading = false;
      console.log(this.blocks);
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
