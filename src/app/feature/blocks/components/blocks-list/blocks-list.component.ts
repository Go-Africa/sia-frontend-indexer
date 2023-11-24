import { Component, OnDestroy, OnInit } from '@angular/core';
import { BlockService } from '../../services/block.service';
import { Block, BlockListGetMODEL, BlockOneListMODEL } from '../../models/block';
import { Subject, interval, lastValueFrom, takeUntil } from 'rxjs';


@Component({
  selector: 'app-blocks-list',
  templateUrl: './blocks-list.component.html',
  styleUrls: ['./blocks-list.component.scss']
})
export class BlocksListComponent implements OnInit, OnDestroy {

  constructor(private _blockService : BlockService) {}

  blocks!: BlockOneListMODEL[]
  page = 1;
  count = 0;
  pageSize = 10;
  destroy$ = new Subject<void>()

  loading! : boolean

  ngOnInit(): void {
    this.loading = true;
    this.init(this.page,this.pageSize)
  }

   init(page:number,limit:number) {
    // interval(5000).pipe(takeUntil(this.destroy$)).subscribe(async ()=>{
      this._blockService.getAllBlocks(page,limit).subscribe(res => {
        this.blocks =  res.docs
        console.log("result",res)
        this.count =  res.totalDocs
        this.loading = false;
      });
      
      console.log("Mes blocks ", this.count ,this.blocks);
    // })
    
  } 

  handlePageChange(event: number): void {
    this.page = event;
    console.log('Mon vent  : ', event)
    this.init(event,this.pageSize);
  }

  stopSpolling(){
    this.destroy$.next()
  }


  ngOnDestroy(): void {
    this.stopSpolling()
  }

}
