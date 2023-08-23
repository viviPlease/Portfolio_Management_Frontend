import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'https://portfolio-management-api-project-icg-shanghai-b19-payments.apps.oscluster1.fnkn.p1.openshiftapps.com';

  constructor(private http: HttpClient) { }

  getStock(ticker: string): Observable<any> {
    console.log(ticker)
    return this.http.get(`${this.baseUrl}/stock/getstockbyticker/${ticker}`);
  }

  // // createEmployee(employee: Object): Observable<Object> {
  // //   return this.http.post(`${this.baseUrl}`, employee);
  // // }

  // updateStock(name: string, currentPrice: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${name}`, currentPrice);
  // }

  deleteStock(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/stock/${name}`, { responseType: 'text' });
  }

  getStocksList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/stock/getallstocks`);
  }

  getstockhis(ticker: string,startTime:string,endTime:string): Observable<any> {
    const params = new HttpParams()
    .set('ticker', ticker)
    .set('startTime', startTime)
    .set('endTime', endTime);
    return this.http.get(`${this.baseUrl}/stock/getstockhis`,{params});
  }

  searchstock(name:string,ticker:string): Observable<any> {
    const params = new HttpParams()
    .set('name', name)
    .set('ticker', ticker);
    return this.http.get(`${this.baseUrl}/stock/searchstock`,{params});
  }
}