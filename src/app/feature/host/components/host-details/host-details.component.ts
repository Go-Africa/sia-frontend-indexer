import { Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HostService } from '../../services/host.service';
import { HostOne } from '../../models/host';
import { ActivatedRoute, Route } from '@angular/router';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-host-details',
  templateUrl: './host-details.component.html',
  styleUrls: ['./host-details.component.scss']
})
export class HostDetailsComponent implements OnInit {
  
  public host!: HostOne

  constructor(
    private _location: Location,
    private _hostServices: HostService,
    private _route: ActivatedRoute,
    private _clipboard: Clipboard,
    private _notifier : NotificationService
  ) { }


  ngOnInit(): void {
    this.init()
  }

  private async init() {
    const publicKey = await this._route.snapshot.params['publicKey'];
    await this.getOneHost(publicKey)

  }


  getOneHost(publicKey: string) {
    this._hostServices.getOneHost(publicKey).subscribe(res => {
      this.host = res
    })
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
