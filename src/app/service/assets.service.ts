import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private baseUrl = 'https://portfolio-management-api-project-icg-shanghai-b19-payments.apps.oscluster1.fnkn.p1.openshiftapps.com/assets';

  constructor(private http: HttpClient) { }

  getAssetsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getassetsbyId/${id}`);
  }

  // createEmployee(employee: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, employee);
  // }

  transforIn(id:number,amount: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/transferin`, {id,amount});
  }

  transforOut(id:number,amount: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/transferout`, {id,amount});
  }

  // deleteFund(name: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/fund/${name}`, { responseType: 'text' });
  // }

  // getFundsList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/fund/getallfunds`);
  // }
}

