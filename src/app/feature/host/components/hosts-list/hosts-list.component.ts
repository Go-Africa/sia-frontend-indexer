import { Component, OnInit } from '@angular/core';
import { HostService } from '../../services/host.service';
import { Subject } from 'rxjs';
import { HostOne } from '../../models/host';

@Component({
  selector: 'app-hosts-list',
  templateUrl: './hosts-list.component.html',
  styleUrls: ['./hosts-list.component.scss']
})
export class HostsListComponent implements OnInit {

  constructor(private _hostService : HostService) {}

  hosts!: HostOne[]
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
    this.loading = true;
    this._hostService.getAllHosts(page,limit).subscribe(res => {
        this.hosts =  res.docs
        console.log("result",res)
        this.count =  res.totalDocs
        this.loading = false;
      });
      
      console.log("Mes blocks ", this.count ,this.hosts);
    // })6564807cb5a0345942133a14
    
  } 

  handlePageChange(event: number): void {
    this.page = event;
    this.init(event,this.pageSize);
  }

  stopSpolling(){
    this.destroy$.next()
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


  ngOnDestroy(): void {
    this.stopSpolling()
  }

}
