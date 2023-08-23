import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {
  private baseUrl = 'https://portfolio-management-api-project-icg-shanghai-b19-payments.apps.oscluster1.fnkn.p1.openshiftapps.com';

  constructor(private http: HttpClient) { }

  getFund(code: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/fund/getfundbycode?code=${code}`);
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

  getfundhis(code: string,startTime:string,endTime:string): Observable<any> {
    const params = new HttpParams()
    .set('code', code)
    .set('startTime', startTime)
    .set('endTime', endTime);
    return this.http.get(`${this.baseUrl}/fund/getfundhis`,{params});
  }

  searchfund(name:string,code:string): Observable<any> {
    const params = new HttpParams()
    .set('name', name)
    .set('code', code);
    return this.http.get(`${this.baseUrl}/fund/searchfund`,{params});
  }
}
