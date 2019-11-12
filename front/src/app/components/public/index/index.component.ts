import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  urlFrontimagesfront=environment.urlFrontImages;
  imagesfront=["http://localhost:4200/assets/imagesfront/val2.jpeg","http://localhost:4200/assets/imagesfront/val3.jpeg","http://localhost:4200/assets/imagesfront/val4.jpeg","http://localhost:4200/assets/imagesfront/val5.jpeg","http://localhost:4200/assets/imagesfront/val7.jpeg","http://localhost:4200/assets/imagesfront/val8.jpeg"];

  constructor() { }

  ngOnInit() {
  }

}
