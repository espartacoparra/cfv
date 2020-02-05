import { Component, OnInit } from "@angular/core";
import { RequestService } from "../../../services/request.service";
@Component({
  selector: "app-publiccart",
  templateUrl: "./publiccart.component.html",
  styleUrls: ["./publiccart.component.css"]
})
export class PubliccartComponent implements OnInit {
  items: [];
  selects: any[] = [];
  quantity = "";
  total;
  oferts: any[];
  constructor(private request: RequestService) { }

  ngOnInit() {
    this.getCart();
    this.getOferts();

  }

  getCart() {
    this.request.getCart().subscribe(data => {
      console.log(data);
      this.items = data.items;
      this.loadSelects();
      console.log(this.selects);
      this.updateTotal()
    });
  }

  loadSelects() {
    this.items.map((item: any): void => {
      var selectedSize = item.product.sizes.filter((size: any) => {
        return size.id == item.size_id;
      });
      var setLength = selectedSize[0].products_sizes.quantity;
      var units = [];
      for (let index = 1; index <= setLength; index++) {
        units.push(index);
      }
      this.selects.push(units);
    });
  }

  getOferts() {
    this.request.getProductsOferts().subscribe(data => {
      console.log(data);
      this.oferts = data;
    });
  }

  send() {
    console.log(this.items);
  }

  updateTotal() {
    var total = 0;
    this.total = this.items.map((item: any): void => {
      item.product.sizes.map((size): void => {
        if (item.size_id == size.id) {
          total += item.quantity * item.price;
        }
      });
    });
    this.total = total;
  }

}
