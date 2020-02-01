import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { ImageService } from 'src/app/services/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerproducts',
  templateUrl: './registerproducts.component.html',
  styleUrls: ['./registerproducts.component.css']
})
export class RegisterproductsComponent implements OnInit {
  formCreateProduct: FormGroup;

  products = [];
  closeResult: string;
  base64textString = [];
  categories = "";
  sizes = "";
  dataSize = [];
  constructor(private router: Router, private request: RequestService, private formBuilder: FormBuilder, private imgService: ImageService) { }

  ngOnInit() {
    this.createBuildForm();
    this.getCategories();
    this.getsizes();
  }

  //forms
  private createBuildForm() {
    this.formCreateProduct = this.formBuilder.group({
      image: [[], [Validators.required]],
      name: ["", [Validators.required, Validators.minLength(6)]],
      price: ["", [Validators.required]],
      description: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      categories: ["", [Validators.required]],
      size: ["", [Validators.required]]
    });
    console.log(this.formCreateProduct);
  }


  /////////////////////////////////////////////////////////////////////

  //methods
  getCategories() {
    this.request.getCategory().subscribe(data => {
      console.log(data);
      this.categories = data;
    });
  }
  getsizes() {
    console.log('a');
    this.request.getSizes().subscribe(data => {
      console.log(data);
      this.sizes = data;
    });
  }

  createProduct() {
    this.formCreateProduct.value.image = this.base64textString;
    var product = this.formCreateProduct.value;
    product.user_id = this.request.session.id;
    console.log(product);
    this.request.createProducts(product).subscribe(data => {
      console.log(data);
      // this.router.navigate(['/admin/products/list']);
    });
  }

  addSizeCount(size) {
    this.formCreateProduct.value.size = this.formCreateProduct.value.size.map(id => {
      this.dataSize
      if (id == size.id) {
        this.dataSize = 
        return { id: id, size: size.name };
      }
    });
    console.log(this.formCreateProduct.value.size);
  }


  ////////////////////////////////////////////////
  // load image
  onUploadImage(evt: any) {
    var data = this.imgService.onUploadChange(evt);
    this.base64textString = data;
    console.log(data);
    this.formCreateProduct.value.image = data;
    console.log(this.formCreateProduct);
  }

}
