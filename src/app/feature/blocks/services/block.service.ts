import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Block, BlockListGetMODEL, BlockOneListMODEL } from '../models/block';
import { Observable, shareReplay, tap } from 'rxjs';
import { Transaction } from '../../transactions/models/transaction';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

    constructor(private _http: HttpClient, private notifier: NotificationService , private _router : Router) { }

  url = environment.apiUrl 

  /* get all blocks*/
  getAllBlocks(page: number,limit: number){
    console.log('Ma page : ', page);
    
    return this._http.get<BlockListGetMODEL[]>(`${this.url}/block/get-all-blocks/?page=${page}&limit=${limit}`).pipe(
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
  /* get all blocks*/
  getAllBlocksDash(page: number,limit: number){
    return this._http.get<Block[]>(`${this.url}/rpc/blocks/?page=${page}&limit=${limit}`).pipe(
      shareReplay(1),
      tap({
        next:(response:any) =>{
        }
      })
    );
  }

  /*get a block */
  getSpecificBlock(height: string): Observable<any> {
    return this._http.get<BlockOneListMODEL>(`${this.url}/block/get-one-block/${height}`).pipe(
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
            this._router.navigate(["/blocks"])
          }
          // else{
          //   console.log("verify your internet connection")
          //   this.notifier.onError("Incorrect entry , verify your block's height and retry !")
          // }
          
        }
      })
    );
  }
}