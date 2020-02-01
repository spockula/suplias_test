import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
// tslint:disable-next-line:variable-name
Base_Url = 'https://ionic-8b912.firebaseio.com';
  constructor(
    private httpClient: HttpClient
  ) { }

  getOrder() {
    return this.httpClient.get(`${this.Base_Url}/order.json`);
  }

  getProduct() {
    return this.httpClient.get(`${this.Base_Url}/product.json`);
  }
  orderItem() {
    return this.httpClient.get(`${this.Base_Url}/order_item.json`);
  }
  buyer() {
    return this.httpClient.get(`${this.Base_Url}/buyer.json`);
  }
  weekly() {
    return this.httpClient.get(`${this.Base_Url}/weekly.json`);
  }
  weeklyItem() {
    return this.httpClient.get(`${this.Base_Url}/weekly_item.json`);
  }
}
