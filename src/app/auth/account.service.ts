import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://group9.testweb01.eu.org:8080/account';

  constructor(private http: HttpClient) { }

  login(name: string,password:string): Observable<any> {
    const data = {
      name: name,
      password: password,
    };
    return this.http.post(`${this.baseUrl}/login`,data);
  }

  // // createEmployee(employee: Object): Observable<Object> {
  // //   return this.http.post(`${this.baseUrl}`, employee);
  // // }

  // updateStock(name: string, currentPrice: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${name}`, currentPrice);
  // }
}
