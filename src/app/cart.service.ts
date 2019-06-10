import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }

  adddToCart(product) {
    this.items.push(product);
  }

  getTTItems() {
    return this.items;
  }

  clearrrCart() {
    this.items = [];
    return this.items;
  }
  getTShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

}

