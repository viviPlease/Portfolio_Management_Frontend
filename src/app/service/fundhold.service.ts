import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundholdService {

  private baseUrl = 'http://group9.testweb01.eu.org:8080/fundhold';

  constructor(private http: HttpClient) { }

  // getStock(ticker: string): Observable<any> {
  //   console.log(ticker)
  //   return this.http.get(`${this.baseUrl}/stock/getstockbyticker/${ticker}`);
  // }

  // // createEmployee(employee: Object): Observable<Object> {
  // //   return this.http.post(`${this.baseUrl}`, employee);
  // // }

  // updateStock(name: string, currentPrice: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${name}`, currentPrice);
  // }

  // deleteStock(name: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/stock/${name}`, { responseType: 'text' });
  // }

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


}
