import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = 'http://group9.testweb01.eu.org:8080';

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
}