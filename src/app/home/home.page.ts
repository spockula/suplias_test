import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  buyer: any;
  storeType: any;
  orders: any;
  productItem: any;
  orderProduct: any;
  leave: any;

  constructor(private firebase: FirebaseService) { }

  ngOnInit() {
this.getorders();
this.getBuyers();
this.orderItem();
this.product();
this.weeklyItem();
this.weekly();
  }

public getorders() {
  this.firebase.getOrder().subscribe((data: Array<object>) => {
    console.log('this is data', data);
    this.orders = data['data']['data'];
  });
}

public getBuyers() {
  this.firebase.buyer().subscribe((data: Array<object>) => {
this.buyer = data['data'];
console.log('this is buyer', this.buyer);
this.storeType = this.buyer.store_type;
console.log('this is storetype', this.storeType);
  });
}

public async product() {
  this.firebase.getProduct().subscribe((data: Array<object>) => {
    console.log('this is product', data);
    this.productItem = data['data'];
      });
}

public async weekly() {
  this.firebase.weekly().subscribe((data: Array<object>) => {
    console.log('this is weekly', data);
      });
}

public async weeklyItem() {
  this.firebase.weeklyItem().subscribe((data: Array<object>) => {
    console.log('this is weeklyItem', data);
      });
}

public async orderItem() {
  this.firebase.orderItem().subscribe((data: Array<object>) => {
    console.log('this is orderItem', data);
    this.orderProduct = data['data'];
      });
}

}
