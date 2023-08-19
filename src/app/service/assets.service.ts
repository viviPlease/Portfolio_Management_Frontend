import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private baseUrl = 'http://localhost:8080/assets';

  constructor(private http: HttpClient) { }

  getAssetsById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getassetsbyId/${id}`);
  }

  // createEmployee(employee: Object): Observable<Object> {
  //   return this.http.post(`${this.baseUrl}`, employee);
  // }

  transforIn(id:number,transInNum: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/transferin`, {id,transInNum});
  }

  // deleteFund(name: string): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/fund/${name}`, { responseType: 'text' });
  // }

  // getFundsList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/fund/getallfunds`);
  // }
}

