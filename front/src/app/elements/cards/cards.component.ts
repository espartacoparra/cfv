import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input('product') product: {};
  images = ["http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg", "http://localhost:4200/assets/imagesfront/val3.jpeg"];
  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
