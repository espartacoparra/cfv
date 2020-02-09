import { Component, OnInit, Input } from '@angular/core';
import { RequestService } from "../../services/request.service";
import { ToastsService } from "../../services/toasts.service";
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input('product') product: {};
  sizeSelected = "";
  images = ["http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg"];
  constructor(private request: RequestService, private toasts: ToastsService) { }
  ngOnInit() {
    console.log(this.product);
  }
  addToCart() {
    var product = {
      product: this.product,
      request: { size: this.sizeSelected, quantity: 1 }
    };
    console.log(product);
    this.request.addToCart(product).subscribe(data => {
      console.log(data);
    });
    this.sizeSelected = "";
  }

}
