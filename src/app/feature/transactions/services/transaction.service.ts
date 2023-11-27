import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction, TransactionListMODEL } from '../models/transaction';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transaction! : TransactionListMODEL

    constructor(private _http: HttpClient, private notifier: NotificationService,private _router : Router ) { }

  url = environment.apiUrl 

  /* get all transactions*/
  getAllTransactions(page: number,limit: number){
    return this._http.get<TransactionListMODEL[]>(`${this.url}/Transaction/get-all-transactions/?page=${page}&limit=${limit}`).pipe(
      shareReplay(1),
      tap({
        next:(response:any) =>{
          if (response.statusCode == 400){
            console.log(response.message)
            this.notifier.onError("Error : " + response.message)
          }
        },
        error:(error:HttpErrorResponse) => {
          if (error.status == 0){
            console.log("verify your internet connection")
            // this.notifier.onInfo("Internet connection interrupted ,verify your internet connection !")
          }else if (error.status == 500){
            console.log("Server error")
            this.notifier.onError("Sorry an error occured on the server !")
          }
        }
      })
    );
  }

  /* get all transactions*/
  getAllTransactionsDash(page: number,limit: number){
    return this._http.get<Transaction[]>(`${this.url}/rpc/transactions/?page=${page}&limit=${limit}`).pipe(
      shareReplay(1),
      tap({
        next:(response:any) =>{
        }
      })
    );
  }

  /*get a transaction */
  getSpecificTransaction(hash: string): Observable<any> {
    return this._http.get<any>(`${this.url}/Transaction/get-one-transaction/${hash}`).pipe(
      shareReplay(1),
      tap({
        next:(response:any) =>{
          if (response.statusCode == 404){
            console.log(response.message)
            this.notifier.onError("Error : " + response.message)
          }
        },
        error:(error:HttpErrorResponse) => {
          if (error.status == 0){
            console.log("verify your internet connection")
            this.notifier.onInfo("Internet connection interrupted ,verify your internet connection !")
          }else if (error.status == 500){
            console.log("Server error")
            this.notifier.onError("Sorry an error occured on the server !")
          }else if (error.error.statusCode == 404){
            this.notifier.onError("Error : " + error.error.message)
            this._router.navigate(["/transactions"])
          }
        }
      })
    );
  }
}
