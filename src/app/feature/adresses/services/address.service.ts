import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay, tap } from 'rxjs';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private _http: HttpClient, private notifier: NotificationService ) { }

  url = environment.apiUrl 

  /*get an address */
  getSpecificAddress(address: string): Observable<any> {
    return this._http.get<any>(`${this.url}/rpc/accounts?page=${address}`).pipe(
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
            this.notifier.onError("Verify your internet connection and retry !")
          }else if (error.status == 500){
            console.log("Server error")
            this.notifier.onError("Sorry an error occured on the server !")
          }else{
            console.log("verify your internet connection")
            this.notifier.onError("Incorrect entry , verify your address and retry !")
          }
        }
      })
    );
  }
}
