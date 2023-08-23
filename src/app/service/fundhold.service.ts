import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundholdService {

  private baseUrl = 'https://portfolio-management-api-project-icg-shanghai-b19-payments.apps.oscluster1.fnkn.p1.openshiftapps.com/fundhold';

  constructor(private http: HttpClient) { }



  getFundholdList(accountId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallfundhold/${accountId}`);
  }

  gettrades(accountId:number,startTime:string,endTime:string): Observable<any> {
    const params = new HttpParams()
    .set('accountId', accountId.toString())
    // .set('startTIme', startTime)
    // .set('endTime', endTime);
    return this.http.get(`${this.baseUrl}/gettrades`,{params});
  }

  buyfund(accountId:number,code:string,amount:number): Observable<boolean> {
    const data = {
      accountId: accountId,
      code: code,
      amount: amount
    };
    return this.http.post<boolean>(`${this.baseUrl}/buyfund`, data);
  }

  sellfund(accountId:number,code:string,amount:number): Observable<boolean> {
    const data = {
      accountId: accountId,
      code: code,
      amount: amount
    };
    return this.http.post<boolean>(`${this.baseUrl}/sellfund`, data);
  }

  
  getallfundholdtrend(accountId:number): Observable<any> {
    const params = new HttpParams()
    .set('accountId', accountId.toString());
    return this.http.get(`${this.baseUrl}/getallfundholdtrend`,{params});
  }


}
