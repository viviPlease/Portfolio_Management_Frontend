import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';

@Injectable()
export class OrdersProfitChartService extends OrdersProfitChartData {

  private baseUrl = 'http://group9.testweb01.eu.org:8080';

  // constructor(private http: HttpClient) { }

  // getStock(ticker: string): Observable<any> {
  //   console.log(ticker)
  //   return this.http.get(`${this.baseUrl}/stock/getstockbyticker/${ticker}`);
  // }

  private summary = [
    {
      title: 'Total Assets',
      value: 3654,
    },
    {
      title: 'Stock Assets',
      value: 946,
    },
    {
      title: 'Fund Assets',
      value: 654,
    },
    {
      title: 'Balance',
      value: 230,
    },
  ];

  constructor(private ordersChartService: OrdersChartData,
              private profitChartService: ProfitChartData) {
    super();
  }

  getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]> {
    return observableOf(this.summary);
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return observableOf(this.ordersChartService.getOrdersChartData(period));
  }

  getProfitChartData(period: string): Observable<ProfitChart> {
    return observableOf(this.profitChartService.getProfitChartData(period));
  }
}
