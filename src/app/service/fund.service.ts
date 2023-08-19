import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private baseUrl = 'http://group9.testweb01.eu.org:8080';

  constructor(private http: HttpClient) { }

  getFund(code: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fund/${code}`);
  }

  // // createEmployee(employee: Object): Observable<Object> {
  // //   return this.http.post(`${this.baseUrl}`, employee);
  // // }

  // updateStock(name: string, currentPrice: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${name}`, currentPrice);
  // }

  deleteFund(name: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/fund/${name}`, { responseType: 'text' });
  }

  getFundsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fund/getallfunds`);
  }
}
