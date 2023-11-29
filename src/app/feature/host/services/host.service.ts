import { Injectable } from '@angular/core';
import { HostGetAll, HostOne } from '../models/host';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { shareReplay, tap } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  url = environment.apiUrl 


  constructor(private _http: HttpClient, private notifier: NotificationService ) { }

   /* get all Hosts*/
   getAllHosts(page: number,limit: number){
    return this._http.get<HostGetAll>(`${this.url}/host/get-all-host/?page=${page}&limit=${limit}`)
  }

  /* get one Hosts*/
  getOneHost(publicKey: string){
    return this._http.get<HostOne>(`${this.url}/host/get-one-host/${publicKey}`)
  }
}
