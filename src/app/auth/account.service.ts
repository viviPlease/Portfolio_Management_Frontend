import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'https://portfolio-management-api-project-icg-shanghai-b19-payments.apps.oscluster1.fnkn.p1.openshiftapps.com/account';

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
