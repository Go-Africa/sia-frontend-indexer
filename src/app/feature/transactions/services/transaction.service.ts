import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../models/transaction';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  transaction! : Transaction

    constructor(private _http: HttpClient, private notifier: NotificationService, ) { }

  url = environment.apiUrl 

  /* get all transactions*/
  getAllTransactions(page: number,limit: number){
    return this._http.get<Transaction[]>(`${this.url}/rpc/transactions/?page=${page}&limit=${limit}`).pipe(
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
            this.notifier.onInfo("Internet connection interrupted ,verify your internet connection !")
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
    return this._http.get<any>(`${this.url}/rpc/transaction/${hash}`).pipe(
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
            this.notifier.onInfo("Internet connection interrupted ,verify your internet connection !")
          }else if (error.status == 500){
            console.log("Server error")
            this.notifier.onError("Sorry an error occured on the server !")
          }
          else{
            console.log("verify your internet connection")
            this.notifier.onError("Incorrect entry , verify your transaction's hash and retry !")
          }
        }
      })
    );
  }
}
