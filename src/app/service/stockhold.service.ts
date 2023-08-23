import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockholdService {

  private baseUrl = 'https://portfolio-management-api-project-icg-shanghai-b19-payments.apps.oscluster1.fnkn.p1.openshiftapps.com/stockhold';

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

  getStockholdList(accountId:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallstockhold/${accountId}`);
  }

  getStocktrades(accountId:number,startTime:string,endTime:string): Observable<any> {
    const params = new HttpParams()
    .set('accountId', accountId.toString())
    .set('startTIme', startTime)
    .set('endTime', endTime);
    return this.http.get(`${this.baseUrl}/gettrades`,{params});
  }

  buystock(accountId:number,ticker:string,amount:number): Observable<boolean> {
    const data = {
      accountId: accountId,
      ticker: ticker,
      amount: amount
    };
    return this.http.post<boolean>(`${this.baseUrl}/buystock`, data);
  }


  sellstock(accountId:number,ticker:string,amount:number): Observable<boolean> {
    const data = {
      accountId: accountId,
      ticker: ticker,
      amount: amount
    };
    return this.http.post<boolean>(`${this.baseUrl}/sellstock`, data);
  }

  getallstockholdtrend(accountId:number): Observable<any> {
    const params = new HttpParams()
    .set('accountId', accountId.toString());
    return this.http.get(`${this.baseUrl}/getallstockholdtrend`,{params});
  }


  

}
