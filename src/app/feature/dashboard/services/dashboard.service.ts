import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';
import { DataDashboard } from '../models/dashboard';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient , private notifier: NotificationService ) { }

  url = environment.apiUrl;

  getLatestPrice (){
    return this._http.get<any>(`${this.url}/rpc/getLatestPrice`);
  }

  getHistoricalPrice (){
    return this._http.get<any[]>(`${this.url}/rpc/getHistoricalPrice`);
  }

  getLatestData (){
    return this._http.get<DataDashboard>(`${this.url}/dashboard/get-latest-data`);
  }

  
}
