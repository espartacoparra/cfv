import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {


  formUpdateProduct: FormGroup;
  id: BigInteger;
  products = [];
  closeResult: string;
  base64textString = [];
  categories = "";
  sizes = "";
  colorId = 0;
  constructor(private router: Router, private request: RequestService, private formBuilder: FormBuilder, private activeroute: ActivatedRoute) {

    this.id = this.activeroute.snapshot.params.id;
    //this.getOneProduct();
  }

  ngOnInit() {
    this.initForm();
    this.getOneProduct();
    this.getCategories();
    this.getsizes();
  }

  //forms
  private initForm() {
    this.formUpdateProduct = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      price: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      description: ["", [Validators.required]],
      categories: ["", [Validators.required]],
      color1: ["", [Validators.required]],
      color2: ["", [Validators.required]],
      color3: ["", [Validators.required]],
      size: ["", [Validators.required]]
    });
    console.log(this.formUpdateProduct);
  }

  private createBuildForm(data) {
    console.log(data)
    var cat = data.categories.map(cat => {
      return cat.id;
    });
    var siz = data.sizes.map(siz => {
      return siz.id;
    });
    console.log(siz);
    console.log(data.colors[0].color1);
    var color1 = data.colors[0].color1;
    var color2 = data.colors[0].color2;
    var color3 = data.colors[0].color3;
    this.formUpdateProduct = this.formBuilder.group({
      name: [data.name, [Validators.required, Validators.minLength(3)]],
      price: [data.price, [Validators.required]],
      quantity: [data.quantity, [Validators.required]],
      description: [data.description, [Validators.required]],
      categories: [cat, [Validators.required]],
      color1: [color1, [Validators.required]],
      color2: [color2, [Validators.required]],
      color3: [color3, [Validators.required]],
      size: [siz, [Validators.required]]
    });
    console.log(this.formUpdateProduct);
  }


  /////////////////////////////////////////////////////////////////////

  //methods
  getOneProduct() {
    this.request.getOneProduct(this.id).subscribe(data => {
      console.log(data);
      this.createBuildForm(data);
      this.colorId = data.colors[0].id;
      //this.categories = data;
    });
  }
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



  updateProduct(p) {
    var product = this.formUpdateProduct.value;
    product.user_id = this.request.session.id;
    product.id = this.id;
    product.colors = { id: this.colorId, color1: this.formUpdateProduct.value.color1, color2: this.formUpdateProduct.value.color2, color3: this.formUpdateProduct.value.color3 }
    console.log(product);
    this.request.updateProducts(product).subscribe(data => {
      console.log(data);
      this.router.navigate(["/admin/products/list"]);
    }
    );
  }
  ////////////////////////////////////////////////

}
